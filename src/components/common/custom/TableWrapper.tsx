import React from "react";

type Props = {
  children: React.ReactNode;
  headers: {
    name: string | React.ReactElement;
    className?: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
  headerClassName?: string;
};

const TableWrapper = ({
  children,
  headers,
  className,
  headerClassName,
}: Props) => {
  return (
    <div
      className={`${className} mx-auto h-full max-h-[calc(100vh-359px)] w-full overflow-auto rounded-lg  border border-t border-gray-200`}
    >
      <table className="w-full whitespace-nowrap">
        <thead className="border-b border-gray-200">
          <tr className="sticky top-0 z-10 rounded-lg bg-gray-50 text-xs font-medium leading-[18px] text-gray-500">
            {headers.map((header, index) => {
              return (
                <th
                  key={index}
                  className={`px-6 py-3.5 text-start ${header.className} `}
                >
                  <div className="flex items-center gap-x-[4px]">
                    <span>{header.name} </span>
                    <span>{header.icon}</span>
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="text-sm text-gray-500 ">{children}</tbody>
      </table>
    </div>
  );
};

export default TableWrapper;
