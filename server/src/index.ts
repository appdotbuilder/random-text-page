import { initTRPC } from '@trpc/server';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import 'dotenv/config';
import cors from 'cors';
import superjson from 'superjson';
import { createTextContentInputSchema } from './schema';
import { createTextContent } from './handlers/create_text_content';
import { getRandomText } from './handlers/get_random_text';
import { getAllTextContents } from './handlers/get_all_text_contents';

const t = initTRPC.create({
  transformer: superjson,
});

const publicProcedure = t.procedure;
const router = t.router;

const appRouter = router({
  healthcheck: publicProcedure.query(() => {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }),
  
  // Get random text content for the static web page
  getRandomText: publicProcedure
    .query(() => getRandomText()),
  
  // Create new text content (for admin/content management)
  createTextContent: publicProcedure
    .input(createTextContentInputSchema)
    .mutation(({ input }) => createTextContent(input)),
  
  // Get all text contents (for admin/content management)
  getAllTextContents: publicProcedure
    .query(() => getAllTextContents()),
});

export type AppRouter = typeof appRouter;

async function start() {
  const port = process.env['SERVER_PORT'] || 2022;
  const server = createHTTPServer({
    middleware: (req, res, next) => {
      cors()(req, res, next);
    },
    router: appRouter,
    createContext() {
      return {};
    },
  });
  server.listen(port);
  console.log(`TRPC server listening at port: ${port}`);
}

start();