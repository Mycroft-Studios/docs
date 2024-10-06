import * as React from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { ThemeProvider } from "@/components/theme-provider"
import {width} from "@mui/system";

interface DialogTabProps {
    head: any,
    rows: unknown[]
}

interface HeadProps {
    accessor: string,
    width: string,
    title: string
}

interface RowProps {
    DLC: string,
    Number: number,
    info: string,
}

interface TableProps {
    head: HeadProps[],
    rows: RowProps[]
}

const MyTable: React.FC<DialogTabProps> = ({
    head,
    rows
}) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            <Table className={"w-[500px]"}>
                <TableHeader>
                    <TableRow>
                        {head.map((item: HeadProps) => (
                            <TableHead key={item.accessor} style={{width: item.width}}>{item.title}</TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rows.map((item: RowProps) => (
                        <React.Fragment key={item.DLC}>
                            <TableRow>
                                <TableCell>{item.Number}</TableCell>
                                <TableCell>{item.DLC}</TableCell>

                                {item.info && <TableCell><a href={item.info} className={"text-primary font-bold text-blue-500"}>View Info </a></TableCell>}
                            </TableRow>
                        </React.Fragment>
                    ))}
                </TableBody>
            </Table>
        </ThemeProvider>
    );
}

export default MyTable;