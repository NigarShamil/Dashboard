import Customer from "../../components/dashboard/Customer/Customer"
import { Revenue } from "../../components/dashboard/RevenueBlock/Revenue"
import Sales from "../../components/dashboard/SalesBlock/Sales"
import SalesMap from "../../components/dashboard/SalesMap/SalesMap"
import TargetReality from "../../components/dashboard/TargetReality/TargetReality"
import TopProducts from "../../components/dashboard/TopProducts/TopProducts"
import Visitors from "../../components/dashboard/VisitorsBlock/Visitors"
import { VolumeService } from "../../components/dashboard/VolumeService/VolumeService"
import { DashboardScreenWrap } from "./DashboardScreen.styles"

const DashboardScreen = () => {
    return (
        <DashboardScreenWrap className="content-area">
            <div className="area-row ar-one">
                <Sales />
                <Visitors />
            </div>
            <div className="area-row ar-two">
                <Revenue />
                <Customer />
                <TargetReality />
                <TopProducts />
                <SalesMap />
                <VolumeService />
            </div>
        </DashboardScreenWrap>
    )
}

export default DashboardScreen