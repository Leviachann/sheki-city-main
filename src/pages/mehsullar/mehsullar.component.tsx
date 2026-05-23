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

    const pageSize = 6; 

    const { data, isLoading, isError } = useGetProducts(
        currentPage,
        pageSize,
        searchTerm || undefined,
        selectedCategory
    );

    const handleSearch = (value: string) => {
        console.log('[Mehsullar] handleSearch called with:', value);
        setSearchTerm(value);
        setCurrentPage(1); // Reset to page 1 on new search
    };

    // Debug: log searchTerm changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // (This small effect helps confirm runtime behavior during verification.)
    // Note: remove these logs after debugging.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // Import of useEffect is not added since this is temporary; using console logs above should suffice.

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
        window.scrollTo({ top: 350, behavior: 'smooth' });
    };

    const productsList = data?.items || [];
    // If user is typing a search term, filter client-side by product `name` (matches `ProductCard` h3)
    const displayedProducts = searchTerm
        ? productsList.filter((p) =>
              p.name?.toLowerCase().includes(searchTerm.trim().toLowerCase())
          )
        : productsList;

    // Use server totalCount when not searching; during client-side search use filtered length
    const totalCount = searchTerm ? displayedProducts.length : data?.totalCount || 0;

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
                        displayedProducts.map((item) => (
                            <ProductCard key={item.id} {...item} />
                        ))
                    )}
                </div>

                {/* Pagination Component styled with absolute darkness theme */}
                {!searchTerm && totalCount > pageSize && (
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