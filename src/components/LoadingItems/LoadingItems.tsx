import React from 'react'

interface LoadingItemsProps {
  count: number
  loadingItemComponent: React.ReactNode
}

const LoadingItems: React.FC<LoadingItemsProps> = ({ count, loadingItemComponent }) => {
  return (
    <>
      {[...Array(count)].map((_, index: number) => (
        <React.Fragment key={index}>{loadingItemComponent}</React.Fragment>
      ))}
    </>
  )
}

export default LoadingItems
