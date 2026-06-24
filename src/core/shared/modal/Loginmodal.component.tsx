import { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useStore } from 'store/store.config';
import { setAuthModal, setUser } from 'store/store.reducer';
import axiosInstance from 'core/configs/axios.config';
import useLocalization from 'assets/lang';
import { ExitIcon } from 'assets/images/icons/exit';
import { errorToast } from 'core/shared/toast/toast';
import { useLoginModalStyles } from './login-modal.style';
import axios from 'axios'; 

export const LoginModal = () => {
  const classes = useLoginModalStyles();
  const dispatch = useDispatch();
  const isOpen = useStore('authModal');
  const translate = useLocalization();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleClose = () => {
    dispatch(setAuthModal(false));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('user/login', { email, password });
      const { accessToken } = response.data;
      const profileResponse = await axiosInstance.get('user/me', {
        headers: { Authorization: `Bearer ${accessToken}` }
      });
      
      dispatch(setUser({ ...profileResponse.data, accessToken }));
      localStorage.setItem('accessToken', accessToken);
      
      handleClose();
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const serverMessage = err.response?.data?.message;
        errorToast(serverMessage);
      } else {
        errorToast(translate('xeta') as string);
      }
    }
  };

  return (
    <div className={classes.backdrop} onClick={handleClose}>
      <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={classes.modalHeader}>
          <h3>{translate('daxil_ol')}</h3>
          <button className={classes.closeBtn} onClick={handleClose}>
            <ExitIcon />
          </button>
        </div>

        <form onSubmit={handleSubmit} className={classes.modalForm}>
          <div className={classes.inputGroup}>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='E-poçt'
              required
            />
          </div>

          <div className={classes.inputGroup}>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Şifrə'
              required
            />
          </div>

          <button type='submit' className={classes.loginSubmitBtn}>
            {translate('daxil_ol')}
          </button>
        </form>
      </div>
    </div>
  );
};