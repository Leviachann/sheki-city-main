import PageHeroComponent from "core/shared/page-hero/page-hero.component";
import useLocalization from "assets/lang";
import news from "../../assets/images/statics/news.png";
import NewsCard from "core/shared/news-card/news-card.component";
const newsData = [
  {
    id: 1,
    image: news,
    title: "Adewole signs pro deal",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    date: "24.01.2025",
    slug: "adewole-signs",
  },
];

const XeberlerComponent = () => {
  const translate = useLocalization();
  return (
    <>
      <PageHeroComponent
        title={translate("xeberler")}
        subtitle={translate("xeberler_subtitle")}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {newsData.map((item) => (
          <NewsCard key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default XeberlerComponent;
