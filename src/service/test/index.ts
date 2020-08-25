import { HttpInstance } from "../HttpInstance";
import { SampleInterface } from "./types";

const http = HttpInstance.getInstance();

/**
 * test service method
 * @param id
 */
export async function test(id: string): Promise<SampleInterface> {
  const res = await http.call<SampleInterface>({
    method: "post",
    url: "/testUrl",
    data: id
  });

  const result = res.data;
  return result;
}
