import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ClassroomModule } from './classroom/classroom.module';
import { CountryModule } from './country/country.module';
import { CourseModule } from './course/course.module';
import { DisciplineModule } from './discipline/discipline.module';
import { EmployeeModule } from './employee/employee.module';
import { OfficeModule } from './office/office.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProvinceModule } from './province/province.module';
import { SchoolYearModule } from './schoolYear/schoolYear.module';
import { StatusModule } from './status/status.module';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { UserModule } from './user/user.module';
import { ClassModule } from './class/class.module';
import { ClassTeamModule } from './classTeam/classTeam.module';
import { PriceModule } from './prices/prices.module';
import { MatriculationModule } from './matriculation/matriculation.module';
import { ProductModule } from './product/product.module';
import { CurriculumGridModule } from './curriculumGrid/curriculumGrid.module';
import { MonthsModule } from './months/months.module';
import { SettingModule } from './setting/setting.module';
import { SchoolFeesModule } from './schoolFees/schoolFees.module';
import { ExamModule } from './exam/exam.module';
import { SchoolResourceModule } from './schoolResource/school-resource.module';
import { PaymentModule } from './payment/payment.module';
import { ClassTeamsTeacherModule } from './classTeamTeacher/classTeamTeacher.module';
import { ScheduleModule } from './schedule/schedule.module';
import { PropinaModule } from './propina/propina.module';
import { DocumentCategoryModule } from './document/category/document.category.module';
import { DocumentTypeModule } from './document/type/document.type.module';
import { StudentSupervisorModule } from './studentSupervisor/student-supervisor.module';
import { DiscountsInUseModule } from './discountsInUse/discounts-in-use.module';
import { PaymentDiscountModule } from './paymentDiscount/student-supervisor.module';
import { InvoicePaymentDiscountsModule } from './invoicePaymentDiscounts/invoice-payment-discounts.module';
import { MedicalRecorModule } from './medicalRecord/medical-record.module';
import { DocumentRequestModule } from './document/request/document.request.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    UserModule,
    StatusModule,
    CountryModule,
    ProvinceModule,
    OfficeModule,
    EmployeeModule,
    ClassroomModule,
    DisciplineModule,
    CourseModule,
    SchoolYearModule,
    TeacherModule,
    StudentModule,
    ClassModule,
    ClassTeamModule,
    PriceModule,
    MatriculationModule,
    ProductModule,
    CurriculumGridModule,
    MonthsModule,
    SettingModule,
    SchoolFeesModule,
    ExamModule,
    SchoolResourceModule,
    PaymentModule,
    ClassTeamsTeacherModule,
    ScheduleModule,
    PropinaModule,
    DocumentCategoryModule,
    DocumentTypeModule,
    StudentSupervisorModule,
    DiscountsInUseModule,
    PaymentDiscountModule,
    InvoicePaymentDiscountsModule,
    MedicalRecorModule,
    DocumentRequestModule,
  ],
})
export class AppModule {}
