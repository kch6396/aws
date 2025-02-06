import { Controller, Get, Header } from '@nestjs/common';

@Controller('/healthy-check')
export class HealthyController {
  @Get()
  @Header(
    'Cache-Control',
    'no-store, no-cache, must-revalidate, proxy-revalidate',
  )
  @Header('Pragma', 'no-cache')
  @Header('Expires', '0')
  healthCheck(): string {
    return 'OK';
  }
}
