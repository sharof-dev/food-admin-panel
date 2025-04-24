import { useState } from "react"
import { PromoCodeList } from "../../components/promo-code/PromoCodeCart"
import PromoFilter from "../../components/promo-code/PromoFilter"


const PromoCode = () => {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div>
      <main className="flex-1 p-3">
        <PromoFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <PromoCodeList searchTerm={searchTerm} /> 
      </main>
    </div>
  )
}

export default PromoCode
