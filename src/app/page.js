// import HomeTags from '@/app/components/homeTags/HomeTags';
import HotSales from './components/hotSales/HotSales';
import bannerPrimavera from './utils/imgs/BannerPrimavera.png';
import BottomBanner from './components/bottomBanner/BottomBanner';

export default function Home() {
	return (
		<>
			{/* <HomeTags /> */}
			<HotSales />
			<BottomBanner banner={bannerPrimavera} />
		</>
	);
}
