/**
 * Calcula o custo total de mão de obra de uma reunião.
 *
 * @param {number} participants Número de participantes (>= 1)
 * @param {number} durationMinutes Duração em minutos (> 0)
 * @param {number} hourlyCost Custo por hora (>= 0)
 * @returns {number} Custo total
 */
export function calculateMeetingCost(participants, durationMinutes, hourlyCost) {
  if (
    !Number.isFinite(participants) ||
    !Number.isFinite(durationMinutes) ||
    !Number.isFinite(hourlyCost)
  ) {
    throw new Error(
      "Informe números finitos para participantes, duração (minutos) e custo por hora."
    );
  }

  if (participants < 1) {
    throw new Error("Informe pelo menos 1 participante.");
  }

  if (durationMinutes <= 0) {
    throw new Error("Informe uma duração positiva em minutos.");
  }

  if (hourlyCost < 0) {
    throw new Error("Informe um custo por hora maior ou igual a zero.");
  }

  return participants * (durationMinutes / 60) * hourlyCost;
}
