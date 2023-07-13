import React from "react"
import ContentLoader from "react-content-loader"
import { CatalogMagicProps } from "../../types/types"

const SkeletonCharDet: React.FC<CatalogMagicProps>  = (props) => (
  <ContentLoader 
    speed={2}
    width={800}
    height={560}
    viewBox="0 0 800 560"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="82" y="5" rx="0" ry="0" width="1" height="1" /> 
    <rect x="1" y="2" rx="0" ry="0" width="205" height="163" /> 
    <rect x="236" y="17" rx="0" ry="0" width="63" height="58" /> 
    <rect x="426" y="98" rx="0" ry="0" width="63" height="58" /> 
    <rect x="426" y="10" rx="0" ry="0" width="63" height="58" /> 
    <rect x="235" y="94" rx="0" ry="0" width="63" height="58" /> 
    <rect x="234" y="172" rx="0" ry="0" width="63" height="58" /> 
    <rect x="429" y="168" rx="0" ry="0" width="63" height="58" /> 
    <rect x="307" y="20" rx="0" ry="0" width="75" height="13" /> 
    <rect x="308" y="39" rx="0" ry="0" width="63" height="18" /> 
    <rect x="309" y="62" rx="0" ry="0" width="34" height="7" /> 
    <rect x="505" y="99" rx="0" ry="0" width="75" height="13" /> 
    <rect x="509" y="169" rx="0" ry="0" width="75" height="13" /> 
    <rect x="500" y="19" rx="0" ry="0" width="75" height="13" /> 
    <rect x="303" y="100" rx="0" ry="0" width="75" height="13" /> 
    <rect x="299" y="179" rx="0" ry="0" width="75" height="13" /> 
    <rect x="304" y="196" rx="0" ry="0" width="63" height="18" /> 
    <rect x="308" y="122" rx="0" ry="0" width="63" height="18" /> 
    <rect x="501" y="40" rx="0" ry="0" width="63" height="18" /> 
    <rect x="506" y="119" rx="0" ry="0" width="63" height="18" /> 
    <rect x="517" y="191" rx="0" ry="0" width="63" height="18" /> 
    <rect x="298" y="216" rx="0" ry="0" width="34" height="7" /> 
    <rect x="301" y="148" rx="0" ry="0" width="34" height="7" /> 
    <rect x="505" y="67" rx="0" ry="0" width="34" height="7" /> 
    <rect x="349" y="102" rx="0" ry="0" width="34" height="7" /> 
    <rect x="513" y="148" rx="0" ry="0" width="34" height="7" /> 
    <rect x="514" y="218" rx="0" ry="0" width="34" height="7" /> 
    <rect x="9" y="173" rx="0" ry="0" width="101" height="11" /> 
    <rect x="10" y="188" rx="0" ry="0" width="184" height="9" /> 
    <rect x="15" y="198" rx="0" ry="0" width="198" height="11" />
  </ContentLoader>
)

export default SkeletonCharDet

