import { PromoCodeList } from "../../components/promo-code/PromoCodeCart"
import PromoFilter from "../../components/promo-code/PromoFilter"

const PromoCode = () => {
  return (
    <div>
      <main className="flex-1 p-3">
        <PromoFilter />
        <PromoCodeList />
      </main>
    </div>
  )
}

export default PromoCode
