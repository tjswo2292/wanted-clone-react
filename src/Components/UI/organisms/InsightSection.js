// 채용중인 포지션 찾기 버튼
// wanted ai가 제안하는 합격률 높은 포지션 title
// 합격률 높은 포지션 cardList
import InsightTitle from "../molecules/insight/InsightTitle";
import InsightCategory from "../molecules/insight/insightCategory";
import InsightList from "../molecules/insight/InsightList";

import "./insightSection.css";

const InsightSection = () => {
  return (
    <section className="insight-section">
      <InsightTitle />
      <InsightCategory />
      <InsightList />
    </section>
  );
};

export default InsightSection;
