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
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name == 'Aged Brie') { this.updateQualityAgedBrie() 
      } else if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') { this.updateQualityBackstagePass() 
      } else if (this.items[i].name == 'Sulfuras, Hand of Ragnaros') { return this.items
      } else { this.updateQualityRegularItem() }
    }
   
    return this.items;
  }
  updateQualityAgedBrie() {
    if (this.items[0].quality < this.maxQuality) {this.increaseQuality(1);}
    this.items[0].sellIn -= 1;
  }
  updateQualityBackstagePass() {
    if (this.items[0].quality < this.maxQuality) {
      if (this.items[0].sellIn > 10) { this.increaseQuality(1); } 
      else if (this.items[0].sellIn < 6) { this.increaseQuality(3); } 
      else { this.increaseQuality(2); }
    }

    this.items[0].sellIn -= 1;
    if (this.items[0].sellIn < 0) { this.setQualityToZero() }
  }
  updateQualityRegularItem() {
    if (this.items[0].quality > this.minQuality) { this.items[0].quality = this.items[0].quality - 1 }
    this.items[0].sellIn = this.items[0].sellIn - 1;
    if (this.items[0].sellIn < 0 && this.items[0].quality > this.minQuality) {
          this.decreaseQuality(1)
    }
  }
  decreaseQuality(amount) {
    this.items[0].quality = this.items[0].quality - amount;
  }
  increaseQuality(amount) {
    this.items[0].quality = this.items[0].quality + amount;
  }
  setQualityToZero() {
    this.items[0].quality = this.items[0].quality - this.items[0].quality;
  }
}
