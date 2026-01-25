import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateSettingDto } from './dto';
import { GetKeysDto } from './dto/getKeysDto';
import { statusTypes } from 'src/helpers';

import * as argon from 'argon2';
@Injectable()
export class SettingService {
  constructor(private prisma: PrismaService) {}

  async update(dto: UpdateSettingDto) {
    try {
      const response = await this.prisma.setting.update({
        where: {
          key: dto.key,
        },
        data: {
          value: dto.value,
        },
      });

      return response;
    } catch (error) {
      throw new ForbiddenException({
        error,
        status: false,
      });
    }
  }

  async getOne(key: string) {
    try {
      const response = await this.prisma.setting.findFirst({
        where: {
          key,
        },
      });

      return response;
    } catch (error) {
      throw new ForbiddenException({
        error,
        status: false,
      });
    }
  }

  async getAll() {
    try {
      const response = await this.prisma.setting.findMany();

      return response;
    } catch (error) {
      throw new ForbiddenException({
        error,
        status: false,
      });
    }
  }

  converKeystToJson(keys = [], data = []) {
    let json = {};

    for (let key of keys) {
      json[key] = data.find((e) => e.key == key);
    }

    return json;
  }

  async getKeys(dto: GetKeysDto) {
    const response = await this.prisma.setting.findMany({
      where: {
        key: {
          in: dto.keys,
        },
      },
    });

    return this.converKeystToJson(dto.keys, response);
  }

  async settingUp() {
    if (1 == 1) return 'Já utilizado';

    // Criar um admin provisório

    // 1. Criar Pais / Provincia
    await this.prisma.country.create({
      data: {
        name: 'Angola',
        code: 'ang',
        province: {
          createMany: {
            data: [
              ...[
                'Bengo',
                'Benguela',
                'Bié',
                'Cabinda',
                'Cuando Cubango',
                'Cuanza Norte',
                'Cuanza Sul',
                'Cunene',
                'Huambo',
                'Huíla',
                'Luanda',
                'Lunda Norte',
                'Lunda Sul',
                'Malanje',
                'Moxico',
                'Namibe',
                'Uíge',
                'Zaire',
              ].map((name) => ({
                name,
              })),
            ],
          },
        },
      },
    });

    // 2. Office Cargo dos funcionarios
    await this.prisma.office.createMany({
      data: [
        {
          name: 'Administrador',
          code: 'Admin',
        },
        {
          name: 'Secretário',
          code: 'Secret',
        },
      ],
    });

    // 3. Estado
    await this.prisma.status.createMany({
      data: [
        { description: 'Ativo', name: 'Ativo', code: 'ACTI', show: true },
        {
          description: 'Inactivo',
          name: 'Inactivo',
          code: 'INACT',
          show: true,
        },
        {
          description: 'Suspendido',
          name: 'Suspendido',
          code: 'SUSP',
          show: true,
        },
        { description: 'Anulado', name: 'Anulado', code: 'ANUL', show: true },
        { description: 'Pendente', name: 'Pendente', code: 'PEND', show: true },
        { description: 'Recebido', name: 'Recebido', code: 'RECE', show: true },
      ],
    });

    // 4. Criar o empregador
    const password = await argon.hash('Domingos.1');
    const user = await this.prisma.user.create({
      data: {
        phone: '944666640',
        access: 'admin',
        password,
        status: {
          connect: {
            code: statusTypes.ACTIVE,
          },
        },
        employee: {
          create: {
            bi: '007914682LA040',
            name: 'José Ndonge',
            phone1: '944666640',
            salary: 100,
            salaryType: 'Fixo',
            address: 'Luanda',
            birthDay: '2001-01-19T16:32:19.801Z',
            civilState: 'Solteiro/a',
            country: {
              connect: {
                id: 1,
              },
            },
            email: 'josedomingos919@gmail.com',
            gender: 'Masculino',
            office: {
              connect: {
                id: 1,
              },
            },
            province: {
              connect: {
                id: 1,
              },
            },
            phone2: '999666640',
            status: {
              connect: {
                code: statusTypes.ACTIVE,
              },
            },
          },
        },
      },
    });

    // Add permission
    await this.prisma.permission.createMany({
      data: [
        {
          area: 'Scretaria',
          descricao: 'Scretaria',
          key: 'show_menu_secretaria',
        },
        {
          area: 'Pedagogia',
          descricao: 'Pedagogia',
          key: 'show_menu_pedagogia',
        },
        {
          area: 'Administrativa',
          descricao: 'Area Administrativa',
          key: 'show_menu_administrativa',
        },
        {
          area: 'Tabelas',
          descricao: 'Tabelas',
          key: 'show_menu_tabelas',
        },
      ],
    });

    // Admin
    for (let permission of [
      'show_menu_tabelas',
      'show_menu_pedagogia',
      'show_menu_secretaria',
      'show_menu_administrativa',
    ]) {
      await this.prisma.userGroupPermission.create({
        data: {
          group: 'admin',
          permission: {
            connect: {
              key: permission,
            },
          },
        },
      });
    }

    return {
      user,
      success: true,
    };
  }
}
