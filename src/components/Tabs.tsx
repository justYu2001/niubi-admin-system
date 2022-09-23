import { useState, useRef, useEffect, forwardRef, ReactNode } from "react";

export interface TabsProps {
    roles: Role[];
}

export default function Tabs({ roles }: TabsProps) {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [activeTabLeft, setActiveTabLeft] = useState(0);
    const [activeTabWidth, setActiveTabWidth] = useState(0);

    const tabsRef = useRef<HTMLDivElement[]>([]);

    const tabs = roles.map(({ value, name }, index) => (
        <Tab
            key={value}
            ref={(element: HTMLDivElement) =>(tabsRef.current[index] = element)}
            isActive={index === activeTabIndex}
            onClick={() => setActiveTabIndex(index)}
        >
            {name}
        </Tab>
    ));

    useEffect(() => {
        const setTabPosition = () => {
            const activeTab = tabsRef.current[activeTabIndex] as HTMLDivElement;
            setActiveTabLeft(activeTab.offsetLeft);
            setActiveTabWidth(activeTab.clientWidth);
        };

        setTabPosition();
        window.addEventListener("resize", setTabPosition);

        return window.removeEventListener("resize", setTabPosition);
    }, [activeTabIndex]);

    return (
        <div className="relative">
            <div className="flex border-b-2 border-gray-300">{tabs}</div>
            <span
                className="absolute bottom-0 block h-0.5 bg-sky-400 rounded-full transition-all duration-300"
                style={{ left: activeTabLeft, width: activeTabWidth }}
            ></span>
        </div>
    );
}

type TabProps = {
    children: ReactNode;
    isActive: boolean;
    onClick: () => void;
};

type TabRef = HTMLDivElement;

const Tab = forwardRef<TabRef, TabProps>(
    ({ children, isActive, onClick }, ref) => (
        <div
            ref={ref}
            className={`px-4 py-1 lg:py-2 text-lg font-medium tracking-wide ${
                isActive ? "text-sky-400" : "text-gray-300"
            } cursor-pointer`}
            onClick={onClick}
        >
            {children}
        </div>
    )
);

Tab.displayName = "Tab";
