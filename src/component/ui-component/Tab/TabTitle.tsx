import react, { Children, useCallback } from 'react'
import styles from './TabsTitle.module.scss'
type Props={
    title:String
    index: number
    setSelectedTab: (index: number) => void
}


const TabTitle: React.FC<Props> = ({title, setSelectedTab, index}) => {
    const onClick = useCallback(() => {
        setSelectedTab(index)
      }, [setSelectedTab, index])
    return (
        <div>
            <div  className={styles.tabstitle} onClick={onClick}>{title}</div>
        </div>
    )
}
export default TabTitle