import { Effect } from 'effect';

const program = Effect.gen(function* () {
  Effect.logInfo('Hello World');

  yield* Effect.void;
});

Effect.runSync(program);
