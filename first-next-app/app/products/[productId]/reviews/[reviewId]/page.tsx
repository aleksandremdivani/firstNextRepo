
const ReviewDetails = async({
    params,
}: {
    params: Promise<{productId: string, reviewId: string}>
}) => {
    const {productId, reviewId} = await params
  return (
    <div>
      <h1>product: {productId}</h1>
      <h2>review: {reviewId}</h2>
    </div>
  )
}

export default ReviewDetails
