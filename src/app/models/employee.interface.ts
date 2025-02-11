export interface Employee {
  name: string;
  idNumber: string;
  roleId: string;
  managerId?: string;
  managerName?: string;
  isActive: boolean;
}
