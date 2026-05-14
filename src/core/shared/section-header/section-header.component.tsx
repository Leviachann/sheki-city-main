import { useNavigate } from 'react-router-dom';
import { Select, Input, Breadcrumb } from 'antd';
import { IPageHeaderProps } from './section-header';
import { usePageHeaderStyles } from './section-header.style';
import { ArrowLeft } from 'assets/images/icons/arrows';

const PageHeaderComponent = ({
    title,
    count,
    onBack,
    search,
    filters,
    current,
    breadcrumbs,
}: IPageHeaderProps) => {
    const classes = usePageHeaderStyles();
    const navigate = useNavigate();

    const handleBack = () => {
        if (onBack) {
            onBack();
        } else {
            navigate(-1);
        }
    };

    return (
        <div className={classes.header}>
            
            {breadcrumbs && breadcrumbs.length > 0 ? (
                
                <Breadcrumb className={classes.breadcrumbs} separator='•'>
                    {breadcrumbs.map((crumb, index) => (
                        <Breadcrumb.Item
                            key={index}
                            onClick={() => crumb.path && navigate(crumb.path)}
                            className={crumb.path ? classes.clickable : classes.location}
                        >
                            {crumb.label}
                        </Breadcrumb.Item>
                    ))}
                </Breadcrumb>
            ) : (
                <button className={classes.backButton} onClick={handleBack}>
                    <ArrowLeft />
                    <span className={classes.pageTitle}>{current}</span>
                </button>
            )}

            <div>
                <h1 className={classes.title}>
                    {title}
                    {count !== undefined && (
                        <span className={classes.count}> - {count}</span>
                    )}
                </h1>
                <div className={classes.actions}>
                    {search && (
                        <Input.Search
                            placeholder={search.placeholder}
                            onSearch={search.onSearch}
                        />
                    )}
                    {filters &&
                        filters.map((filter, index) => (
                            <Select
                                key={index}
                                defaultValue={filter.defaultValue}
                                onChange={filter.onChange}
                            >
                                {filter.options.map((option) => (
                                    <Select.Option key={option.value} value={option.value}>
                                        {option.label}
                                    </Select.Option>
                                ))}
                            </Select>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default PageHeaderComponent;