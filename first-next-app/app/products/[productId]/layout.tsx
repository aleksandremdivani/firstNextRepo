
export default function ProductLayout({
    children,
}: {
    children: React.ReactNode
}) {

  return (
    <div>
        <p>featured products</p>
      {children}
      
    </div>
  )
}
