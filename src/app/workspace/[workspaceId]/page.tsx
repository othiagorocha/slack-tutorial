"use client";

import { useParams } from "next/navigation";

const WorkspaceIdPage = () => {
  const params = useParams();

  return <div>WorkspaceIdPage - {params.workspaceId}</div>;
};

export default WorkspaceIdPage;
