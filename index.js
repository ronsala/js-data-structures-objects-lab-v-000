function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver.key;
  
  return driver;
}