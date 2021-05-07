class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
    this.minQuality = 0
    this.maxQuality = 50
  }
  updateQuality() {
    this.items.forEach((item, index) => {
      if (item.name == 'Aged Brie') { this.updateQualityAgedBrie(index) 
      } else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') { this.updateQualityBackstagePass(index) 
      } else if (item.name == 'Sulfuras, Hand of Ragnaros') { return item
      } else if (item.name == 'Conjured item') { this.updateQualityConjuredItem(index)
      } else { this.updateQualityRegularItem(index) }
    })
   
    return this.items;
  }
  updateQualityAgedBrie(index) {
    if (this.items[index].quality < this.maxQuality) {this.increaseQuality(1);}
    this.decreaseSellIn()
  }
  updateQualityBackstagePass(index) {
    if (this.items[index].quality < this.maxQuality) {
      if (this.items[index].sellIn > 10) { this.increaseQuality(1); } 
      else if (this.items[index].sellIn <= 5) { this.increaseQuality(3); } 
      else { this.increaseQuality(2); }
    }

    this.decreaseSellIn()
    if (this.items[0].sellIn < 0) { this.setQualityToZero() }
  }
  updateQualityRegularItem(index) {
    this.decreaseSellIn()
    if (this.items[index].quality > this.minQuality) { 
      this.items[index].sellIn < 0 ? this.decreaseQuality(2) : this.decreaseQuality(1)
    }
  }
  updateQualityConjuredItem(index) {
    this.decreaseSellIn()
    if (this.items[index].quality > this.minQuality) { 
      this.items[index].sellIn < 0 ? this.decreaseQuality(4) : this.decreaseQuality(2)
    }
  }
  decreaseQuality(amount) {
    this.items[0].quality = this.items[0].quality - amount;
  }
  increaseQuality(amount) {
    this.items[0].quality = this.items[0].quality + amount;
  }
  decreaseSellIn() {
    this.items[0].sellIn = this.items[0].sellIn - 1;
  }
  setQualityToZero() {
    this.items[0].quality = this.items[0].quality - this.items[0].quality;
  }
}
