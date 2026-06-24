import React, { useState, FormEvent, ChangeEvent } from 'react';
import useLocalization from 'assets/lang';
import { ExitIcon } from 'assets/images/icons/exit';
import { errorToast, successToast } from 'core/shared/toast/toast';
import axiosInstance from 'core/configs/axios.config';
import axios from 'axios';
import { useVacancyApplyModalStyles } from './vacancy-apply-modal.style';

interface VacancyApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  vacancyId: number;
}

export const VacancyApplyModal = ({ isOpen, onClose, vacancyId }: VacancyApplyModalProps) => {
  const translate = useLocalization();
  const classes = useVacancyApplyModalStyles();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCvFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!cvFile) {
      errorToast(translate('cv_yukleyin_error') as string);
      return;
    }

    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('Cv', cvFile);

      const queryParams = new URLSearchParams({
        FullName: fullName,
        Email: email,
        Phone: phone,
        CoverLetter: coverLetter,
      }).toString();

      await axiosInstance.post(
        `Vacancies/${vacancyId}/applications?${queryParams}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      successToast(translate('muraciet_ugurlu') as string);
      onClose();
      setFullName('');
      setEmail('');
      setPhone('');
      setCoverLetter('');
      setCvFile(null);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const serverMessage = err.response?.data?.message;
        errorToast(serverMessage || (translate('xeta') as string));
      } else {
        errorToast(translate('xeta') as string);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={classes.backdrop} onClick={onClose}>
      <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={classes.modalHeader}>
          <h3>{translate('vakansiya_uzre_muraciet')}</h3>
          <button onClick={onClose} className={classes.closeBtn}>
            <ExitIcon />
          </button>
        </div>

        <form onSubmit={handleSubmit} className={classes.modalForm}>
          <input
            type='text'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder={translate('ad_soyad_placeholder') as string}
            required
            className={classes.inputField}
          />

          <div className={classes.inputRow}>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={translate('email_placeholder') as string}
              required
              className={classes.inputField}
            />
            <input
              type='tel'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={translate('mobil_nomre_placeholder') as string}
              required
              className={classes.inputField}
            />
          </div>

          <textarea
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            placeholder={translate('haqqinizda_placeholder') as string}
            rows={4}
            required
            className={classes.textAreaField}
          />

          <div className={classes.fileUploadWrapper}>
            <label 
              htmlFor='cv-upload' 
              className={classes.fileLabel}
              style={{ color: cvFile ? '#333' : '#999' }}
            >
              <span>{cvFile ? cvFile.name : (translate('cv_yukleyin'))}</span>
              <span>📄</span>
            </label>
            <input
              id='cv-upload'
              type='file'
              accept='.pdf,.doc,.docx'
              onChange={handleFileChange}
              className={classes.hiddenInput}
            />
          </div>

          <button 
            type='submit' 
            disabled={isSubmitting}
            className={classes.submitBtn}
          >
            {isSubmitting ? (translate('yuklenir') as string) : (translate('gonder') as string)}
          </button>
        </form>
      </div>
    </div>
  );
};