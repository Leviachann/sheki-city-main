import React from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalization from 'assets/lang';
import ProductCard from 'core/shared/product-card/product-card.component';
import { useGetProducts } from 'pages/mehsullar/actions/mehsullar.query';
import { Routes } from 'router/routes';
import { ArrowLink } from 'assets/images/icons/arrows';
import { useHomeProductsStyles } from './home-products.style';

const HomeProductsComponent = () => {
  const translate = useLocalization();
  const classes = useHomeProductsStyles();
  const navigate = useNavigate();

  const { data, isLoading } = useGetProducts(1, 3);
  const productsList = data?.items || [];

  const handleViewAllClick = () => {
    navigate(Routes.mehsullar);
  };

  if (isLoading || productsList.length === 0) return null;

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes.titleWrapper}>
            <h2 className={classes.title}>
              {translate('mehsul_satisi')}
            </h2>
            <p className={classes.subtitle}>
              {translate('mehsullar_subtitle')}
            </p>
          </div>
          <div className={classes.viewAllLink} onClick={handleViewAllClick}>
            <span>{translate('butun_mehsullar')}</span>
            <ArrowLink />
          </div>
        </div>

        <div className={classes.grid}>
          {productsList.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProductsComponent;