interface PriceProps {
  price: string | undefined,
}

export const Price = ({price} : PriceProps) => {
  return (
    <div className={`${price ? 'absolute right-1 top-1 bg-slate-50 rounded-lg font-semibold text-sm p-1' : ''}`}>
      {price}
    </div>
  )
}