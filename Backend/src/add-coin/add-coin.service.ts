import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddCoin } from './entities/add-coin.entity';

@Injectable()
export class AddCoinService {
  constructor(@InjectRepository(AddCoin) private repo: Repository<AddCoin>) { }

  async create(gettingCoinId, gettingCoinName, gettingCoinPrice, gettingcoinQty, gettingWalletAddress) {
    const user = await this.repo.findOne({ where: { coinName: gettingCoinName, walletAddress: gettingWalletAddress } });
    if (user) {
      user.coinName = gettingCoinName
      user.coinPrice = gettingCoinPrice
      user.coinId = gettingCoinId
      user.walletAddress = gettingWalletAddress
      user.coinQty = (Number(user.coinQty) + Number(gettingcoinQty))
      user.totalPrice = (Number(user.totalPrice) + (Number(gettingCoinPrice) * Number(gettingcoinQty)))
      return this.repo.save(user);
    }
    let coinName = gettingCoinName
    let coinPrice = gettingCoinPrice
    let coinQty = gettingcoinQty
    let coinId = gettingCoinId
    let walletAddress = gettingWalletAddress
    const addNewCoin = this.repo.create({ coinId, coinName, coinPrice, coinQty, walletAddress });
    addNewCoin.totalPrice = gettingCoinPrice * gettingcoinQty
    return this.repo.save(addNewCoin);
  }

  findAll(walletAddress: string) {
    if (!walletAddress) {
      return null;
    }
    return this.repo.find({ where: { walletAddress: walletAddress } });
  }
}
