import {redis} from "@/lib/redis";
import {Ratelimit} from "@upstash/ratelimit";


export const rateLimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(10, "10 s")
})