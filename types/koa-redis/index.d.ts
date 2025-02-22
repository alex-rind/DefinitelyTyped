// Type definitions for koa-redis 4.0
// Project: https://github.com/koajs/koa-redis
// Definitions by: Nick Simmons <https://github.com/nsimmons>
//                 Scotland Stephenson <https://github.com/alsoscotland>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { stores } from "koa-session";
import { ClientOpts } from "redis";

declare namespace redisStore {
    interface RedisOptions extends ClientOpts {
        duplicate?: boolean | undefined;
        client?: any;
    }

    interface RedisSessionStore extends stores {
        client: any;
    }
}

declare function redisStore(options: redisStore.RedisOptions): redisStore.RedisSessionStore;
export = redisStore;
