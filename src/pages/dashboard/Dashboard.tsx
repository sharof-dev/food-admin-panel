import { FC, useState } from "react"
import Impression from "../../components/dashboard-component/impression/Impression"
// import  from "../../components/dashboard-component/pie-chart/PieChart"
import Calendar from "../../components/dashboard-component/calendar/Calendar"
import PieChartSection from "../../components/dashboard-component/pie-chart/PieChart"
import { DeliveryStatusSection } from "../../components/dashboard-component/delivery-status/DeliveryStatus"
import { OrderChartSection } from "../../components/dashboard-component/order_section/OrderSection"
import { TotalRevenueSection } from "../../components/dashboard-component/total_revenue/TotalRevenue"
import { CustomerMapSection } from "../../components/dashboard-component/customer/CustomerMap"
import { ActionBlocksSection } from "../../components/dashboard-component/ActionBlock/ActionBlockSection"

const Dashboard: FC = () => {
  const [currentMonth, setcurrentMonth] = useState<Date | undefined>(undefined)



  return (
    <div className="space-y-6 px-4 py-6">
      <div className="gap-6 grid grid-cols-12">
        <div className="col-span-12 lg:col-span-8">
          <div className="gap-6 grid grid-cols-12">
            <div className="col-span-6 lg:col-span-6">
              <Impression />
            </div>
            <div className="col-span-6 lg:col-span-6">
              <PieChartSection />
            </div>
            <div className="col-span-6 lg:col-span-6">
              <DeliveryStatusSection />
            </div>
            <div className="col-span-6 lg:col-span-6">
              <OrderChartSection />
            </div>

          </div>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <Calendar currentMonth={currentMonth} setcurrentMonth={setcurrentMonth} />
        </div>

        <div className="col-span-12 lg:col-span-8">
          <TotalRevenueSection />
        </div>

        <div className="col-span-12 lg:col-span-4">
          <CustomerMapSection />
        </div>
        <div className="col-span-12 lg:col-span-8">
          <ActionBlocksSection />
        </div>


      </div>
    </div>
  )
}

export default Dashboard
