import React from 'react';
import "./SidePanel.css";

export interface SidePanelProps {
    className?: React.HTMLAttributes<HTMLDivElement>["className"],
    containerClass?: React.HTMLAttributes<HTMLDivElement>["className"];
    style?: React.HTMLAttributes<HTMLDivElement>["style"];
    containerStyle?: React.HTMLAttributes<HTMLDivElement>["style"];
    children?: React.ReactNode;

}

function SidePanel({ className, containerClass, style, containerStyle, children }: SidePanelProps) {
    return (
        <div className={`__SidePanel_container ${containerClass}`} style={{ ...containerStyle }}>
            <aside className={`__SidePanel ${className}`} style={{ ...style }}>{children}</aside>
        </div>
    )
}

export default SidePanel;