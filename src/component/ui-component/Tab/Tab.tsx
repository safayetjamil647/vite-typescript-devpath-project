import react, { Children } from 'react'

type Props={
    title:String
}


const Tab: React.FC<Props> = ({children}) => {
    return <div>{children}</div>
}
export default Tab