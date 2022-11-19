(() => {
  // Fuente: https://gist.github.com/Klerith/625ef0d0a501f716ed5e3dbdf88396db

  // Archivos a evaluar - files to evaluate
  const filesToEvaluate = [
    { id: 1, flagged: false },
    { id: 2, flagged: false },
    { id: 3, flagged: true },
    { id: 4, flagged: false },
    { id: 5, flagged: false },
    { id: 7, flagged: true },
  ];

  // Archivos marcados para borrar - files to delete
  const filesToDelete = filesToEvaluate.map((file) => file.flagged);

  // Malos nombres
  class AbstractUser {}
  class UserMixin {}
  class UserImplementation {}
  interface IUser {}

  // Mejores nombres
  class User {}
  interface User {}

  // Todo: Tarea

  // día de hoy - today
  const today = new Date();

  // días transcurridos - elapsed time in days
  const passedDays: number = 23;

  // número de archivos en un directorio - number of files in directory
  const filesNumberByDirectory = 33;

  // primer nombre - first name
  const firstName = "Fernando";

  // primer apellido - last name
  const lastName = "Herrera";

  // días desde la última modificación - days since modification
  const lastUpdatedDate = 12;

  // cantidad máxima de clases por estudiante - max classes per student
  const maxClassesPerStudent = 6;
})();
