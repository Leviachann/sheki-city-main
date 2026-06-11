import { useState, useTransition } from 'react';
import { Pagination, Empty } from 'antd';
import PageHeroComponent from 'core/shared/page-hero/page-hero.component';
import useLocalization from 'assets/lang';
import ProductCard from 'core/shared/product-card/product-card.component';
import { useMehsullarStyles } from './mehsullar.style';
import PageHeaderComponent from 'core/shared/section-header/section-header.component';
import { useGetProducts } from './actions/mehsullar.query';

const MehsullarComponent = () => {
    const translate = useLocalization();
    const classes = useMehsullarStyles();
    const [, startTransition] = useTransition();

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<number | undefined>(undefined);

    const pageSize = 6; 

    const { data, isLoading } = useGetProducts(
        currentPage,
        pageSize,
        searchTerm.trim() || undefined,
        selectedCategory
    );

    const handleSearch = (value: string) => {
        startTransition(() => {
            setSearchTerm(value);
            setCurrentPage(1); 
        });
    };

    const handleCategoryChange = (value: string | number) => {
        setSelectedCategory(value === 'all' ? undefined : Number(value));
        setCurrentPage(1); 
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 350, behavior: 'smooth' });
    };

    const productsList = data?.items || [];
    const totalCount = data?.totalCount || 0;

    return (
        <div className={classes.wrapper}>
            <PageHeroComponent
                title={translate('mehsullar')}
                subtitle={translate('mehsullar_subtitle')}
            />

            <PageHeaderComponent
                current={translate('butun_mehsullar') as string}
                search={{
                    placeholder: translate('axtar') as string,
                    onSearch: handleSearch,
                    onChange: handleSearch,
                }}
                filters={[
                    {
                        label: translate('butun_mehsullar') as string,
                        defaultValue: 'all',
                        options: [
                            { label: translate('butun_mehsullar') as string, value: 'all' },
                            { label: 'Merchandise', value: 1 },
                            { label: 'Apparel', value: 2 },
                        ],
                        onChange: handleCategoryChange,
                    },
                ]}
            />

            <section className={classes.container}>
                {isLoading ? (
                    <div className={classes.grid}>
                        {[...Array(pageSize)].map((_, index) => (
                            <div key={index}/>
                        ))}
                    </div>
                ) : productsList.length > 0 ? (
                    <div className={classes.grid}>
                        {productsList.map((item) => (
                            <ProductCard key={item.id} {...item} />
                        ))}
                    </div>
                ) : (
                    <Empty 
                        image={Empty.PRESENTED_IMAGE_SIMPLE} 
                        description={translate('no_products') || 'Məhsul tapılmadı'} 
                        style={{ margin: '40px auto' }}
                    />
                )}

                {totalCount > pageSize && (
                    <div>
                        <Pagination
                            current={currentPage}
                            total={totalCount}
                            pageSize={pageSize}
                            onChange={handlePageChange}
                            showSizeChanger={false}
                        />
                    </div>
                )}
            </section>
        </div>
    );
};

export default MehsullarComponent;