import React, { useState } from 'react';
import { Pagination } from 'antd';
import PageHeroComponent from 'core/shared/page-hero/page-hero.component';
import useLocalization from 'assets/lang';
import newsImg from '../../assets/images/statics/news.png'; // Fallback static image
import NewsCard from 'core/shared/news-card/news-card.component';
import { useXeberlerStyles } from './xeberler.style';
import PageHeaderComponent from 'core/shared/section-header/section-header.component';
import { useGetXeberler } from './actions/xeberler.query';
import { useGetNewsCategories } from './actions/xeber-categories.query'; 
import { S3_BASE_URL } from 'core/configs/axios.config'; // Imported S3 Constant

const XeberlerComponent = () => {
    const translate = useLocalization();
    const classes = useXeberlerStyles();

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<number | undefined>(undefined);

    const pageSize = 6;

    const { data } = useGetXeberler(
        currentPage,
        pageSize,
        selectedCategory
    );

    const { data: serverCategories = [] } = useGetNewsCategories('az');

    const handleSearch = (value: string) => {
        setSearchTerm(value.trim().toLowerCase());
        setCurrentPage(1);
    };

    const handleCategoryChange = (value: string | number) => {
        if (value === 'all') {
            setSelectedCategory(undefined);
        } else {
            setSelectedCategory(Number(value));
        }
        setCurrentPage(1); 
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 350, behavior: 'smooth' });
    };

    const rawNewsList = data?.items || [];
    const totalCount = data?.totalCount || 0;

    const filteredNewsList = rawNewsList.filter((item) => {
        if (!searchTerm) return true;
        return (
            item.title?.toLowerCase().includes(searchTerm) ||
            item.excerpt?.toLowerCase().includes(searchTerm)
        );
    });

    const dynamicCategoryOptions = [
        { label: translate('hamisi') as string || 'Hamısı', value: 'all' },
        ...serverCategories.map((cat) => ({
            label: cat.name,
            value: cat.id
        }))
    ];

    return (
        <>
            <PageHeroComponent
                title={translate('xeberler')}
                subtitle={translate('xeberler_subtitle')}
            />

            <PageHeaderComponent
                current={translate('butun_xeberler') as string}
                search={{
                    placeholder: translate('axtar') as string,
                    onSearch: handleSearch,
                    onChange: handleSearch,
                }}
                filters={[
                    {
                        label: translate('kateqoriya') as string,
                        defaultValue: 'all',
                        options: dynamicCategoryOptions,
                        onChange: handleCategoryChange,
                    },
                ]}
            />

            <section className={classes.container}>
                <div className={classes.grid}>
                    {filteredNewsList.map((item) => {
                        const articleImage = item.coverImageUrl 
                            ? `${S3_BASE_URL}${item.coverImageUrl}` 
                            : newsImg;

                        const cardProps = {
                            id: item.id,
                            title: item.title,
                            description: item.excerpt,
                            slug: item.slug,
                            category: item.category?.name || 'News',
                            date: item.publishedAt 
                                ? new Date(item.publishedAt).toLocaleDateString('az-AZ') 
                                : '',
                            image: articleImage
                        };

                        return <NewsCard key={item.id} {...cardProps} />;
                    })}
                </div>

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
        </>
    );
};

export default XeberlerComponent;