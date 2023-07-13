import React from "react"
import ContentLoader from "react-content-loader"
import { CatalogMagicProps } from "../../types/types"

const SkeletonLoc: React.FC<CatalogMagicProps> = (props) => (
  <ContentLoader 
    speed={2}
    width={1100}
    height={660}
    viewBox="0 0 800 560"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
   <rect x="82" y="5" rx="0" ry="0" width="1" height="1" /> 
    <rect x="7" y="52" rx="0" ry="0" width="295" height="124" /> 
    <rect x="312" y="52" rx="0" ry="0" width="295" height="124" /> 
    <rect x="7" y="199" rx="0" ry="0" width="295" height="124" />
  </ContentLoader>
)

export default SkeletonLoc

