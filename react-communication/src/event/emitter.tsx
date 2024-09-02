import mitt from "next/dist/shared/lib/mitt";
export const EmitterTypes = {
    TEST: "TEST",
}
export const emitter = mitt()
