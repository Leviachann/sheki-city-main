import { useState } from 'react';
import { Pagination } from 'antd';
import PageHeroComponent from 'core/shared/page-hero/page-hero.component';
import useLocalization from 'assets/lang';
import ProductCard from 'core/shared/product-card/product-card.component';
import { useMehsullarStyles } from './mehsullar.style';
import PageHeaderComponent from 'core/shared/section-header/section-header.component';
import { useGetProducts } from './actions/mehsullar.query';

const MehsullarComponent = () => {
    const translate = useLocalization();
    const classes = useMehsullarStyles();

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<number | undefined>(undefined);

    const pageSize = 6; // Standard 2x3 grid as shown in the design

    const { data, isLoading, isError } = useGetProducts(
        currentPage,
        pageSize,
        searchTerm || undefined,
        selectedCategory
    );

    const handleSearch = (value: string) => {
        setSearchTerm(value);
        setCurrentPage(1); // Reset to page 1 on new search
    };

    const handleCategoryChange = (value: string | number) => {
        if (value === 'all') {
            setSelectedCategory(undefined);
        } else {
            setSelectedCategory(Number(value));
        }
        setCurrentPage(1); // Reset to page 1 on filter change
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Scroll smoothly to top of grid when changing pages
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
                <div className={classes.grid}>
                    {isLoading ? (
                        <p style={{ color: 'white', textAlign: 'center', gridColumn: '1 / -1' }}>
                            Loading products...
                        </p>
                    ) : isError ? (
                        <p style={{ color: 'white', textAlign: 'center', gridColumn: '1 / -1' }}>
                            Failed to load products.
                        </p>
                    ) : productsList.length === 0 ? (
                        <p style={{ color: 'white', textAlign: 'center', gridColumn: '1 / -1' }}>
                            No products found.
                        </p>
                    ) : (
                        productsList.map((item) => (
                            <ProductCard key={item.id} {...item} />
                        ))
                    )}
                </div>

                {/* Pagination Component styled with absolute darkness theme */}
                {totalCount > pageSize && (
                    <div className={classes.paginationContainer}>
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