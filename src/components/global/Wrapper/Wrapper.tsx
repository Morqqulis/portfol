import { IWrapper } from '@/interfaces/interfaces'

const Wrapper: React.FC<IWrapper> = ({
    children,
}: {
    children: React.ReactNode
}): JSX.Element => {
    return (
        <div className="wrapper h-full min-w-[0px] px-[4vw] llg:px-[2.5vw] py-[4vh] llg:py-[2.5vh]">
            <div className="container h-full max-w-full border-border-color border rounded-lg bg-primary-grey relative z-10 overflow-hidden flex flex-col">
                {children}
            </div>
        </div>
    )
}
export default Wrapper
