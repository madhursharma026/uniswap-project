import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AddCoinService } from './add-coin.service';
import { CreateAddCoinDto } from './dto/create-add-coin.dto';

@Controller('add-coin')
export class AddCoinController {
  constructor(private readonly addCoinService: AddCoinService) {}

  @Post()
  async addCoin(@Body() body: CreateAddCoinDto) {
      const addNewCoin = await this.addCoinService.create(body.coinId, body.coinName, body.coinPrice, body.coinQty, body.walletAddress);
      return addNewCoin;
  }

  @Get('/:walletAddress')
  findAll(@Param('walletAddress') walletAddress: string) {
    return this.addCoinService.findAll(walletAddress);
  }
}
