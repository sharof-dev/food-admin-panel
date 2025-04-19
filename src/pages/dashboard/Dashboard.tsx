import { FC, useState } from "react"
import Impression from "../../components/dashboard-component/impression/Impression"
// import  from "../../components/dashboard-component/pie-chart/PieChart"
import Calendar from "../../components/dashboard-component/calendar/Calendar"
import PieChartSection from "../../components/dashboard-component/pie-chart/PieChart"

const Dashboard: FC = () => {
  // const [currentMonth, setcurrentMonth] = useState("January 2025")
  return (
    <div className="space-y-6 px-4 py-6">
      <div className="justify-between gap-6 grid md:grid-cols-2 lg:grid-cols-3">
        <div className="flex h-[130px]">
          <Impression />
          <PieChartSection />
        </div>
        <Calendar />
      </div>
    </div>
  )
}

export default Dashboard
