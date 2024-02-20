import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

export const dynamic = "force-dynamic";

const Tabless = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[220px] thead">Name</TableHead>
          <TableHead className="thead">Status</TableHead>
          <TableHead className="thead">Date</TableHead>
          <TableHead className="text-right w-[120px] thead">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">
            <div className="flex items-center gap-x-2">
              <Image
                alt="avatar"
                src={
                  "https://images.pexels.com/photos/15019490/pexels-photo-15019490/free-photo-of-portrait-of-a-smiling-man.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                width={30}
                height={30}
                className="avatar rounded-full"
              />
              John Doe
            </div>
          </TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>16/02/24</TableCell>
          <TableCell className="text-right">$160.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">
            <div className="flex items-center gap-x-2">
              <Image
                alt="avatar"
                src={
                  "https://images.pexels.com/photos/18978812/pexels-photo-18978812/free-photo-of-young-redhead-in-a-leather-jacket-and-sunglasses-sitting-on-a-bench.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                width={30}
                height={30}
                className="avatar rounded-full"
              />
              Emily Clerk
            </div>
          </TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>16/02/24</TableCell>
          <TableCell className="text-right">$340.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">
            <div className="flex items-center gap-x-2">
              <Image
                alt="avatar"
                src={
                  "https://images.pexels.com/photos/7752820/pexels-photo-7752820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                width={30}
                height={30}
                className="avatar rounded-full"
              />
              Rishab Khattar
            </div>
          </TableCell>
          <TableCell>Pending</TableCell>
          <TableCell>16/02/24</TableCell>
          <TableCell className="text-right">$10.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default Tabless;
