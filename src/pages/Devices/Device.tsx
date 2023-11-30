import React from 'react';
import Content from '../../layouts/Content';
import { UserSession } from 'devflikrauth';
import Tippy from '@tippyjs/react';
import formatDate from '../../core/utils/formatDate';
import { MonitorSmartphone, ScreenShareOff } from 'lucide-react';

export interface DeviceBoxProps extends UserSession, React.HTMLAttributes<HTMLDivElement> {
    index: number;
    remove: (token: string) => void;
}

function DeviceBox({ device, platform, browser, os, deviceToken, createdAt, index, current, remove, sessionToken, expiredAt }: DeviceBoxProps) {

    const deviceName = [device, platform, os, browser].filter(item => !!item).join(" - ").trim() || "Unknown";
    return (
        <Content className="p-4 my-5 relative">
            <span className="text-2xl font-medium text-gray-500 absolute right-1 sm:right-auto top-1 sm:top-auto sm:bottom-1 sm:left-1">{index}</span>
            <div className="flex flex-nowrap flex-col sm:flex-row gap-2 sm:gap-5 items-start">
                <div className="flex flex-nowrap flex-row sm:flex-col">
                    <DeviceImage type="type" content={device} label="Device" src={device} />
                    <DeviceImage type="platform" content={platform} label="Platform" src={platform} />
                    <DeviceImage type="browser" content={browser} label="Browser" src={browser} />
                </div>
                <div className="flex-1 w-full">
                    <h2 className="text-sm capitalize text-orange-300"><span className="text-base text-white font-semibold">Device Name:</span> {deviceName}</h2>
                    <h2 className="text-sm text-violet-300"><span className="text-base text-white font-semibold">Session started at:</span> {formatDate(new Date(createdAt))}</h2>
                    <h2 className="text-sm text-violet-300"><span className="text-base text-white font-semibold">Device's first log:</span> {formatDate(new Date(createdAt))}</h2>
                    <div className="flex flex-wrap gap-5">
                        <div className="text-sm flex-1">
                            <h2 className="text-sm text-orange-300">
                                <span className="text-base text-white font-semibold">Specifications</span>
                                <ul className="list-disc pl-5">
                                    <li className="text-sm capitalize text-teal-300"><span className="text-gray-400 font-semibold">Type:</span> {device || "Unknown"}</li>
                                    <li className="text-sm capitalize text-teal-300"><span className="text-gray-400 font-semibold">Platform:</span> {platform || "Unknown"}</li>
                                    <li className="text-sm capitalize text-teal-300"><span className="text-gray-400 font-semibold">Operating System:</span> {os || "Unknown"}</li>
                                    <li className="text-sm capitalize text-teal-300"><span className="text-gray-400 font-semibold">Browser:</span> {browser || "Unknown"}</li>
                                    {/* <li className="text-sm capitalize text-teal-300"><span className="text-gray-400 font-semibold">IP Address:</span> {ip || "Unknown"}</li> */}
                                </ul>
                            </h2>
                        </div>
                        {!expiredAt && <div className="self-end ml-auto">
                            {current ?
                                <div className="text-blue-700 flex items-center gap-2 mb-3 font-bold"><span><MonitorSmartphone /></span> Current Session</div> :
                                <Tippy content={
                                    <div className="flex flex-col gap-4 p-2">
                                        <span>Are you sure you want to remove this session?</span>
                                        <button type="button" onClick={() => remove(sessionToken)} className="flex-1 px-5 py-2 bg-red-700 rounded w-3/4 mx-auto hover:bg-red-600 focus-visible:bg-red-600 transition-all">Confirm</button>
                                    </div>
                                } delay={0} trigger="click" placement="top-end" interactive><button className="bg-red-900 hover:bg-red-700 focus-visible:bg-red-700 transition-all px-5 py-2 rounded flex items-center gap-5" type="button"><span className="scale-75"><ScreenShareOff /></span>Remove Session</button></Tippy>
                            }
                        </div>}
                    </div>
                    {expiredAt && <h2 className="text-sm text-violet-300"><span className="text-base text-white font-semibold">Session closed at:</span> {formatDate(new Date(expiredAt))}</h2>}
                </div>
            </div>
            <div className="text-right -mb-3 text-gray-600 font-bold text-[10px]">{deviceToken}</div>
        </Content>
    );
}

export default DeviceBox;

export interface DeviceImageProps {
    type: "type" | "platform" | "browser";
    src: string;
    content: string;
    label: string;
}
export function DeviceImage({ src, type, label, content }: DeviceImageProps) {
    return (
        <Tippy content={`${label}: ${content || "Unknown"}`} placement="right">
            <span className="w-10 aspect-square rounded-full p-2 bg-[#28293F] shadow-[0_0_0_2px_#48495F] first-of-type:ml-0 sm:first-of-type:mt-0 -ml-1 sm:ml-0 sm:-mt-1">
                <img src={`/assets/device-${type}-${src?.toLowerCase() || "unknown"}.png`} alt={src} />
            </span>
        </Tippy>
    );
}