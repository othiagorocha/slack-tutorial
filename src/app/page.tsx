"use client";
import React from "react";
import { UserButton } from "@/features/auth/components/user-button";

import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";

export default function Номе() {
  const { data, isLoading } = useGetWorkspaces();

  const workspaceId = React.useMemo(() => data?.[0]?._id, [data]);

  React.useEffect(() => {
    if (isLoading) {
      return;
    }
    if (workspaceId) {
      console.log("Redirect to workspace");
    } else {
      console.log("Open creation modal");
    }
  }, [isLoading, workspaceId]);

  return (
    <div>
      <UserButton />
    </div>
  );
}
