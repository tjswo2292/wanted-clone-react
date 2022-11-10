import { useEffect } from "react";
import "./recruitPage.css";

const RecruitPage = () => {
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll); //clean up
		};
	}, []);

	const handleScroll = (e) => {
		console.log(window.scrollY);
	};
	return (
		<main>
			<div className="main-container">
				<div className="apply-desc">
					<div className="apply-img-box">
						<img
							src={process.env.PUBLIC_URL + "./assets/applyImg.webp"}
							alt="회사이미지"
						/>
					</div>
					<div className="company-job-title">
						<span>Software Developer (Junior)</span>
					</div>
					<div className="company-job-desc">
						<span>콘파파(CONPAPA)</span>
						<span>응답률 매우 높음</span>
						<span>서울 한국</span>
					</div>
					<ul className="hashtag">
						<li>
							<span>#스타트업</span>
						</li>
						<li>
							<span>#위워크</span>
						</li>
						<li>
							<span>#IT, 컨텐츠</span>
						</li>
					</ul>
					<div className="desc-wrap">
						[회사소개]
						<br />
						카카오픽코마는 작품과 독자의 연결을 통해 독자에게는 일상의 즐거움을,
						콘텐츠 산업에서는 작품의 가치가 더욱 빛날 수 있는 세상을 만들고자
						합니다. 세계 최대의 일본 만화 시장과 프랑스에서 디지털 만화, 소설
						플랫폼 '픽코마'를 전개하고 있으며, 나아가 작품이 국경을 초월하여
						보다 넓은 세상의 독자들과 만날 수 있는 세계를 꿈꾸고 있습니다.
						<br />
						<br />
						[조직소개]
						<br />
						카카오픽코마 한국오피스 Global개발그룹은 독자적인 S/W 개발 역량을
						갖추어 여러가지 새로운 가능성들을 현실화할 수 있는 조직이 되고자
						하는 목표를 가지고 있습니다. 조금 더 구체적으로는, 성공적인 서비스
						런칭과 성장을 목표로 S/W 개발을 주요 업무로 하는 곳입니다. 픽코마
						서비스로 신 시장을 개척하여 전 세계 사람들이 만화를 보며 행복해지는
						꿈을 꿉니다. 그래서 함께 고민하고 처음부터 다시 만들어나가는
						마음가짐으로 도전하고 성장하는 인재를 찾고 있습니다.
						<br />
						<br />
						주요업무
						<br />
						[어떤 역할을 해주셔야 하나요]
						<br />
						<br />
						이런 일을 합니다
						<br />
						• 이미지 컨텐츠를 매끄럽게 고객에게 제공합니다
						<br />
						• 신규 요구사항을 분석하고 설계하여 개발합니다
						<br />
						• 기존 서버 API들을 재 사용하는 공수 최적화 설계합니다
						<br />
						• 재 사용성을 극대화 하는 UI 컴포넌트 및 상태 설계합니다
						<br />
						• 설계, 개발, 빌드, 배포 파이프라인을 구축합니다
						<br />
						<br />
						이런 마음가짐이 필요합니다
						<br />
						• 장인 또는 리더로 성장 할 다짐
						<br />
						• 어려운 문제는 함께 고민하고, 쉬운 문제는 능동적으로 해결
						<br />
						• 빠른 기술 변화에 대한 적극적인 학습 태도
						<br />
						• 동료의 성장을 도울 수 있다는 믿음
						<br />
						<br />
						자격요건
						<br />
						이런 경험이 필요합니다
						<br />
						• JavaScript 또는 TypeScript 사용 경험이 있으신 분<br />
						• 순수 HTML & CSS에 대한 경험이 있으신 분<br />
						• 모던 웹 프레임워크 / 라이브러리 1개 이상 사용 경험이 있으신 분
						<br />
						• 모던 웹 상태 관리 개념 및 원리를 잘 알고 계신 분<br />
						• 모던 CSS 속성 사용 경험이 있으신 분<br />
						• 비동기 호출을 위한 네트워크 모듈(XHR, Web Fetch) 에 대한 이해 및
						경험이 있으신 분<br />
						• 해외 출장에 결격 사유가 없는 분<br />
						<br />
						우대사항
						<br />
						이런 경험이 있다면 더더욱 좋습니다
						<br />
						• 성능 이슈, 메모리 누수, 네트워크 프로파일링 경험이 있으신 분
						<br />
						• UI 컴포넌트 테스팅 경험이 있으신 분<br />
						• SSR / CSR 방식 등 다양한 렌더링을 사용하여 웹 어플리케이션 개발
						경험이 있으신 분<br />
						• Next.js, Tailwind CSS 사용 경험이 있으신 분<br />
						• Atomic Design에 대해 알고계신 분<br />
						• AWS ECS / Cloudfront에 대해 경험이 있으신 분<br />
						• 오픈소스 기여 경험이 있으신 분<br />
						<br />
						혜택 및 복지
						<br />
						• 파격적인 안식 휴가 제공: 3년 근무 시, 30일 유급휴가 및 200만원의
						휴가비를 지원해 드립니다.
						<br />
						• 업무 도서 지원: 업무에 필요하거나 도움이 될 수 있는 도서 구매를
						전액 지원받을 수 있습니다. <br />
						• 매월 식비 지원: 사내식당 점심 지원 및 분기별 30만원 씩 기본 연봉과
						별도로 포인트 형태로 지급해 드립니다.
						<br />
						• 종합 건강 검진 지원: 매년 1회 건강검진을 시행하며, 검진비용을
						지원해 드립니다.
						<br />
						• 카카오 어린이집 운영: 추첨을 통해 원아를 모집하고 있습니다.
						<br />
						• 경조사 지원: 본인/배우자/가족 등의 경조사에 대한
						경조사비/화환/용품 등을 지원해 드립니다.
						<br />
						• 가족 상해 보험 지원: 본인, 배우자, 자녀, 본인과 배우자의 부모까지
						보장성 보험료와 실손의료비를 지원해 드립니다.
						<br />
						<br />
						[전형안내]
						<br />
						서류 전형 ＞1차 인터뷰 ＞ 2차 인터뷰 ＞ 처우 협의 ＞ 최종 합격
						<br />
						<br />
						* 직무 및 상황에 따라 전형 절차는 변경될 수 있습니다.
						<br />* 지원서 내용 중 허위사실이 있는 경우에는 합격이 취소될 수
						있습니다.
					</div>
					<div className="skill-stack">
						<p>기술스택 · 툴</p>
						<ul className="skill-stack-list">
							<li>AJAX</li>
							<li>Azure</li>
							<li>ASP .NET</li>
							<li>JavsScript</li>
							<li>jQuery</li>
							<li>HTML5</li>
							<li>Css</li>
							<li>MicroSoft Server</li>
							<li>MSSQL</li>
						</ul>
					</div>
					<div className="company-follow">
						<div className="company-follow-box">
							<div className="company-name">
								<div className="company">
									<span>이모지</span>
								</div>
								<div className="name-span">
									<span>이노팸</span>
									<span>IT, 컨텐츠</span>
								</div>
							</div>
							<div className="follow-icon">
								<span>팔로우</span>
							</div>
						</div>
					</div>
					<div className="warning-header">
						<div className="warning-header-box">
							<div className="warning-desc">
								<div className="mark">
									<span>!</span>
								</div>
								<p>
									본 채용정보는 원티드랩의 동의없이 무단전재, 재배포, 재가공할
									수 없으면 , 구직활동 이외의 <br />
									용도로 사용할 수 없습니다.
								</p>
							</div>
							<div className="down-icon">
								<i className="fa fa-angle-down" aria-hidden="true"></i>
							</div>
						</div>
					</div>
				</div>
				<div className="money-wrap">
					<div className="money">
						<div className="money-container">
							<div className="money-title-box">
								<span>채용보상금</span>
								<div className="share-icon-box">
									<i className="fa fa-share-alt" aria-hidden="true"></i>
								</div>
							</div>
							<table className="money-table">
								<thead>
									<tr>
										<th>추천인</th>
										<th>지원자</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>500,000</td>
										<td>500,000</td>
									</tr>
								</tbody>
							</table>
							<div className="money-bookmark">
								<span>북마크하기</span>
							</div>
							<div className="money-apply">
								<span>지원하기</span>
							</div>
							<div className="money-like-icon-box">
								<div className="like-icon-list">
									<i className="fa fa-heart-o" aria-hidden="true"></i>
									<span>0</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<p className="search-position">최선재님, 이 포지션을 찾고 계셨나요?</p>
		</main>
	);
};

export default RecruitPage;
