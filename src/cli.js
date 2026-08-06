import { calculateMeetingCost } from "./meeting-cost.js";

const args = process.argv.slice(2);

if (args.length !== 3) {
  console.error(
    "Uso: npm start -- <participantes> <duração-minutos> <custo-por-hora>"
  );
  console.error("Exemplo: npm start -- 5 30 100");
  process.exit(1);
}

const [participantsArg, durationArg, hourlyCostArg] = args;

try {
  const total = calculateMeetingCost(
    Number(participantsArg),
    Number(durationArg),
    Number(hourlyCostArg)
  );

  console.log(
    `Custo total da reunião: ${total.toFixed(2)} (${participantsArg} participantes, ${durationArg} min, ${hourlyCostArg}/hora)`
  );
} catch (error) {
  console.error(`Erro: ${error.message}`);
  process.exit(1);
}
