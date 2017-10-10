# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from __future__ import unicode_literals

from django.db import models


class AdminUser(models.Model):
    user_name = models.CharField(unique=True, max_length=255)
    password = models.CharField(max_length=255)
    true_name = models.CharField(max_length=255)
    user_role = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'admin_user'


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class OperaAccount(models.Model):
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()
    user_id = models.IntegerField()
    bank_name = models.CharField(max_length=50)
    user_type = models.IntegerField()
    card_code = models.CharField(max_length=50)
    contact_name = models.CharField(max_length=20)
    contact_mobile = models.CharField(max_length=20)

    class Meta:
        managed = False
        db_table = 'opera_account'


class OperaAuthCode(models.Model):
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    update_user = models.IntegerField()
    update_time = models.DateTimeField()
    tel = models.CharField(max_length=100)
    usage = models.IntegerField()
    result = models.CharField(max_length=100)
    error_code = models.IntegerField()
    error_msg = models.CharField(max_length=255)
    use_time = models.CharField(max_length=100)
    auth_code = models.CharField(max_length=255)
    invalid_time = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'opera_auth_code'


class OperaAuthFile(models.Model):
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()
    user_type = models.IntegerField()
    user_id = models.IntegerField()
    file_type = models.IntegerField()
    file_name = models.CharField(max_length=50)
    file_path = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'opera_auth_file'


class OperaBookHis(models.Model):
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()
    type = models.IntegerField()
    start_run_date = models.CharField(max_length=10)
    end_run_date = models.CharField(max_length=10)
    seat = models.IntegerField()
    count = models.IntegerField()
    status_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'opera_book_his'


class OperaBoxing(models.Model):
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()
    category = models.IntegerField()
    user_type = models.IntegerField()
    user_id = models.IntegerField()
    read_time = models.CharField(max_length=255)
    title = models.CharField(max_length=64)
    content = models.CharField(max_length=512)
    note = models.CharField(max_length=255)
    status_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'opera_boxing'


class OperaBusCommentHis(models.Model):
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()
    user_id = models.IntegerField()
    order_id = models.IntegerField()
    sub_order_id = models.IntegerField()
    bus_id = models.IntegerField()
    bus_model_id = models.IntegerField()
    driver_id = models.IntegerField()
    enviroment_lvl = models.IntegerField()
    service_lvl = models.IntegerField()
    drive_lvl = models.IntegerField()
    familiar_lvl = models.IntegerField()
    comment_tag = models.CharField(max_length=255)
    comment_txt = models.CharField(max_length=512)
    status_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'opera_bus_comment_his'


class OperaBusCommentSum(models.Model):
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()
    type = models.IntegerField()
    bus_model_id = models.IntegerField()
    target_id = models.IntegerField()
    service_lvl = models.DecimalField(max_digits=4, decimal_places=2)
    drive_lvl = models.DecimalField(max_digits=4, decimal_places=2)
    familiar_lvl = models.DecimalField(max_digits=4, decimal_places=2)
    miles_sum = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'opera_bus_comment_sum'


class OperaBusModelPriceBase(models.Model):
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()
    bus_model = models.ForeignKey('SysBusModel', models.DO_NOTHING)
    price_type = models.IntegerField()
    area_id = models.IntegerField()
    model_price = models.CharField(max_length=32)

    class Meta:
        managed = False
        db_table = 'opera_bus_model_price_base'
        unique_together = (('bus_model', 'price_type', 'area_id'),)


class OperaBusModelPriceDate(models.Model):
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()
    run_date = models.DateField()
    bus_model_id = models.IntegerField()
    price_type = models.IntegerField()
    area_id = models.IntegerField()
    model_price = models.DecimalField(max_digits=10, decimal_places=2)
    set_mode = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'opera_bus_model_price_date'
        unique_together = (('bus_model_id', 'run_date', 'price_type', 'area_id'),)


class OperaBusVerifyHistory(models.Model):
    bus_id = models.IntegerField()
    verify_result = models.IntegerField()
    verify_comment = models.TextField(blank=True, null=True)
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'opera_bus_verify_history'


class OperaDriverVerifyHistory(models.Model):
    id = models.IntegerField(primary_key=True)
    driver_id = models.IntegerField()
    verify_result = models.IntegerField()
    verify_comment = models.TextField(blank=True, null=True)
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'opera_driver_verify_history'


class OperaInvoiceAddress(models.Model):
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()
    user_id = models.IntegerField()
    deliver_contact = models.CharField(max_length=255)
    deliver_tel = models.CharField(max_length=16)
    area_id = models.IntegerField()
    deliver_add = models.CharField(max_length=255)
    memo = models.CharField(max_length=255)
    status_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'opera_invoice_address'


class OperaInvoiceHis(models.Model):
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()
    user_id = models.IntegerField()
    invoice_add_id = models.IntegerField()
    invoice_id = models.IntegerField()
    deliver_contact = models.CharField(max_length=255)
    deliver_tel = models.CharField(max_length=16)
    deliver_top_area_id = models.IntegerField()
    deliver_mid_area_id = models.IntegerField()
    deliver_area_id = models.IntegerField()
    deliver_add = models.CharField(max_length=255)
    area_id = models.IntegerField()
    deliver_company_id = models.IntegerField()
    deliver_company = models.CharField(max_length=255)
    deliver_number = models.CharField(max_length=255)
    invoice_title = models.CharField(max_length=100)
    invoice_tax_no = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=10, decimal_places=0)
    memo = models.CharField(max_length=255)
    status_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'opera_invoice_his'


class OperaInvoiceInfo(models.Model):
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()
    user_id = models.IntegerField()
    user_type = models.IntegerField()
    invoice_type = models.IntegerField()
    title = models.CharField(max_length=255)
    tax_no = models.CharField(max_length=64)
    card_bank_name = models.CharField(max_length=255)
    card_number = models.CharField(max_length=64)
    register_add = models.CharField(max_length=255)
    register_tel = models.CharField(max_length=255)
    deliver_contact = models.CharField(max_length=255)
    deliver_tel = models.CharField(max_length=16)
    deliver_add = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'opera_invoice_info'


class OperaPaymentHistory(models.Model):
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()
    user_id = models.IntegerField()
    type = models.IntegerField()
    outside_id = models.CharField(max_length=255)
    value = models.CharField(max_length=255)
    old_value = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'opera_payment_history'


class OperaSearchHistory(models.Model):
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()
    user_id = models.IntegerField()
    start_station_id = models.IntegerField()
    end_station_id = models.CharField(max_length=50)
    day_count = models.IntegerField()
    type_id = models.IntegerField()
    ip = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'opera_search_history'


class OperaSearchHistory1(models.Model):
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()
    user_id = models.IntegerField()
    start_station_id = models.IntegerField()
    end_station_id = models.CharField(max_length=50)
    day_count = models.IntegerField()
    type_id = models.IntegerField()
    ip = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'opera_search_history1'


class OperaSupplier(models.Model):
    create_time = models.DateTimeField()
    cancel_flag = models.IntegerField()
    update_time = models.DateTimeField()
    username = models.CharField(max_length=255)
    password_hash = models.CharField(max_length=255)
    supplier_type = models.IntegerField()
    true_name = models.CharField(max_length=100)
    email = models.CharField(max_length=255)
    tel = models.CharField(max_length=100)
    address = models.CharField(max_length=50)
    lock_flag = models.IntegerField()
    remark = models.TextField(blank=True, null=True)
    verify_flag = models.IntegerField()
    balance = models.DecimalField(max_digits=10, decimal_places=2)
    frozen_fund = models.DecimalField(max_digits=10, decimal_places=2)
    balance_type = models.IntegerField()
    balance_circle = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'opera_supplier'
        unique_together = (('tel', 'cancel_flag'),)


class OperaSupplierLockHistory(models.Model):
    supplier_id = models.IntegerField()
    lock_type = models.IntegerField()
    lock_comment = models.TextField(blank=True, null=True)
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'opera_supplier_lock_history'


class OperaUser(models.Model):
    create_time = models.DateTimeField()
    cancel_flag = models.IntegerField()
    update_time = models.DateTimeField()
    username = models.CharField(max_length=255)
    password_hash = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    true_name = models.CharField(max_length=100)
    tel = models.CharField(max_length=100)
    address = models.TextField(blank=True, null=True)
    lock_flag = models.IntegerField()
    remark = models.TextField(blank=True, null=True)
    balance = models.DecimalField(max_digits=10, decimal_places=2)
    treasury = models.DecimalField(max_digits=10, decimal_places=2)
    verify_flag = models.IntegerField()
    auth_file = models.CharField(max_length=255)
    balance_type = models.IntegerField(blank=True, null=True)
    balance_circle = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'opera_user'
        unique_together = (('tel', 'cancel_flag'),)


class OperaUserExtra(models.Model):
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'opera_user_extra'


class OperaWithdraw(models.Model):
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()
    account_id = models.IntegerField()
    withdraw_type = models.IntegerField()
    withdraw_role = models.IntegerField()
    withdraw_money = models.DecimalField(max_digits=10, decimal_places=2)
    withdraw_commission = models.DecimalField(max_digits=10, decimal_places=2)
    transfer_money = models.DecimalField(max_digits=10, decimal_places=2)
    withdraw_status = models.IntegerField()
    withdraw_remark = models.TextField(blank=True, null=True)
    approve_id = models.IntegerField()
    approve_time = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'opera_withdraw'


class OperaWithdrawOrder(models.Model):
    opera_withdraw_id = models.IntegerField()
    order_id = models.IntegerField()
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()
    account_id = models.IntegerField()
    withdraw_type = models.IntegerField()
    withdraw_role = models.IntegerField()
    withdraw_money = models.DecimalField(max_digits=10, decimal_places=2)

    class Meta:
        managed = False
        db_table = 'opera_withdraw_order'


class OrderClaim(models.Model):
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()
    order_id = models.IntegerField()
    cancel_reason = models.CharField(max_length=50)
    claim_type = models.IntegerField()
    user_claim = models.DecimalField(max_digits=10, decimal_places=2)
    supplier_claim = models.DecimalField(max_digits=10, decimal_places=2)

    class Meta:
        managed = False
        db_table = 'order_claim'


class OrderCommon(models.Model):
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()
    user_id = models.IntegerField()
    supplier_id = models.IntegerField()
    type = models.IntegerField()
    day_count = models.IntegerField()
    start_run_date = models.CharField(max_length=10)
    start_run_time = models.CharField(max_length=5)
    end_run_date = models.CharField(max_length=10)
    model_id = models.IntegerField()
    bus_count = models.IntegerField()
    miles = models.IntegerField()
    flight = models.CharField(max_length=255)
    flight_start_date = models.CharField(max_length=10)
    contact_user = models.CharField(max_length=64)
    contact_phone = models.CharField(max_length=12)
    invoice = models.IntegerField()
    invoice_status_id = models.IntegerField()
    start_station_id = models.IntegerField()
    start_station = models.CharField(max_length=255)
    end_station_id = models.CharField(max_length=255)
    end_station = models.CharField(max_length=5000)
    order_price = models.DecimalField(max_digits=10, decimal_places=2)
    withdraw_money_all = models.DecimalField(max_digits=10, decimal_places=2)
    withdraw_money_excute = models.DecimalField(max_digits=10, decimal_places=2)
    pay_limit_time = models.DateTimeField()
    confirm_limit_time = models.DateTimeField()
    cancel_type = models.IntegerField()
    finance_lock = models.IntegerField()
    finance_status = models.IntegerField()
    comment_status = models.IntegerField()
    claim_flag = models.IntegerField()
    pay_status_id = models.IntegerField()
    status_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'order_common'


class OrderExtra(models.Model):
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()
    order = models.ForeignKey(OrderCommon, models.DO_NOTHING)
    supplier_id = models.IntegerField()
    brand_id = models.IntegerField()
    area_id = models.IntegerField()
    seat_count = models.IntegerField()
    age_type = models.IntegerField()
    fleet_id = models.IntegerField()
    bus_id = models.IntegerField()
    driver_id = models.IntegerField()
    miles = models.IntegerField()
    total_miles = models.IntegerField()
    cost_price1 = models.DecimalField(max_digits=10, decimal_places=2)
    cost_price2 = models.DecimalField(max_digits=10, decimal_places=2)
    run_date = models.CharField(max_length=16)
    status_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'order_extra'


class OrderGenerateConnect(models.Model):
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()
    from_order_id = models.IntegerField()
    to_order_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'order_generate_connect'


class OrderLog(models.Model):
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()
    pid = models.IntegerField()
    order_id = models.IntegerField()
    old_order_status = models.IntegerField()
    new_order_status = models.IntegerField()
    attr_table = models.CharField(max_length=32)
    attr_name = models.CharField(max_length=32)
    attr_old_value = models.CharField(max_length=255)
    attr_new_value = models.CharField(max_length=255)
    txt = models.CharField(max_length=255)
    note = models.CharField(max_length=255)
    status_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'order_log'


class OrderPayment(models.Model):
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()
    order_id = models.IntegerField()
    pay_method = models.IntegerField()
    pay_type = models.IntegerField()
    outside_payment_id = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    real_price = models.DecimalField(max_digits=10, decimal_places=2)
    coupon_id = models.CharField(max_length=255)
    status_id = models.IntegerField()
    outside_status_id = models.IntegerField()
    outside_note = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'order_payment'


class OrderPaymentOrigin(models.Model):
    id = models.IntegerField(primary_key=True)
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()
    order_id = models.IntegerField()
    pay_method = models.IntegerField()
    pay_type = models.IntegerField()
    outside_payment_id = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    real_price = models.DecimalField(max_digits=10, decimal_places=2)
    coupon_id = models.CharField(max_length=255)
    status_id = models.IntegerField()
    outside_status_id = models.IntegerField()
    outside_note = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'order_payment_origin'


class OrderPriceDetail(models.Model):
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()
    order_id = models.IntegerField()
    fleet_id = models.IntegerField()
    bus_id = models.IntegerField()
    driver_id = models.IntegerField()
    miles = models.IntegerField()
    day_num = models.IntegerField()
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    price_method = models.TextField()

    class Meta:
        managed = False
        db_table = 'order_price_detail'


class OrderRefund(models.Model):
    create_time = models.DateTimeField()
    user_id = models.IntegerField()
    user_type = models.IntegerField()
    refund_money = models.DecimalField(max_digits=10, decimal_places=2)
    refund_reason = models.CharField(max_length=50)
    order_id = models.IntegerField()
    refund_status = models.IntegerField()
    refund_time = models.DateTimeField()
    pay_type = models.IntegerField()
    outside_pay_id = models.CharField(max_length=50)

    class Meta:
        managed = False
        db_table = 'order_refund'


class OrderTravelPath(models.Model):
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()
    order_id = models.IntegerField()
    name = models.CharField(max_length=255)
    seq = models.IntegerField()
    run_date = models.CharField(max_length=10)
    run_time = models.CharField(max_length=5)
    note = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'order_travel_path'


class RegionTep(models.Model):
    id = models.SmallIntegerField(primary_key=True)
    pid = models.SmallIntegerField()
    code = models.CharField(max_length=6)
    name = models.CharField(max_length=30)

    class Meta:
        managed = False
        db_table = 'region_tep'


class RunBusSchedule(models.Model):
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()
    bus_id = models.IntegerField()
    run_date = models.CharField(max_length=16)
    supplier_id = models.IntegerField()
    brand_id = models.IntegerField()
    area_id = models.IntegerField()
    seat_count = models.IntegerField()
    age_type = models.IntegerField()
    status_type = models.IntegerField()
    order_id = models.IntegerField()
    status_note = models.CharField(max_length=255)
    status_id = models.IntegerField()
    bus_model_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'run_bus_schedule'
        unique_together = (('bus_id', 'run_date'),)


class RunDriverSchedule(models.Model):
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()
    driver_id = models.IntegerField()
    supplier_id = models.IntegerField()
    run_date = models.CharField(max_length=16)
    status_type = models.IntegerField()
    order_id = models.IntegerField()
    status_note = models.CharField(max_length=255)
    status_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'run_driver_schedule'
        unique_together = (('driver_id', 'run_date'),)


class SysArea(models.Model):
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()
    parent_id = models.IntegerField()
    city_id = models.IntegerField()
    disp_flag = models.IntegerField()
    area_name = models.CharField(max_length=255)
    search_area_name = models.CharField(max_length=255)
    quanping = models.CharField(max_length=255)
    jianping = models.CharField(max_length=20)
    region_type = models.IntegerField()
    area_type = models.IntegerField()
    popular_type = models.IntegerField()
    start_flag = models.IntegerField()
    end_flag = models.IntegerField()
    address_flag = models.IntegerField()
    longitude = models.CharField(max_length=16)
    latitude = models.CharField(max_length=16)
    seq = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'sys_area'


class SysAvailableTreasury(models.Model):
    create_user_id = models.IntegerField()
    update_user_id = models.IntegerField()
    create_time = models.DateTimeField()
    update_time = models.DateTimeField()
    user_id = models.IntegerField()
    pay_type = models.IntegerField()
    pay_money = models.DecimalField(max_digits=10, decimal_places=2)
    cost_money = models.DecimalField(max_digits=10, decimal_places=2)
    pay_outside_id = models.CharField(max_length=50)
    cancel_order_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'sys_available_treasury'


class SysBalanceHis(models.Model):
    cancel_flag = models.IntegerField()
    create_user_id = models.IntegerField()
    create_time = models.DateTimeField()
    update_user_id = models.IntegerField()
    update_time = models.DateTimeField()
    user_id = models.IntegerField()
    user_type = models.IntegerField()
    change_reason = models.IntegerField()
    change_type = models.IntegerField()
    change_remark = models.CharField(max_length=100)
    change_money = models.DecimalField(max_digits=10, decimal_places=2)
    order_id = models.IntegerField()
    withdraw_id = models.IntegerField()
    pay_status = models.IntegerField()
    pay_time = models.DateTimeField()
    pay_type = models.IntegerField()
    outside_pay_id = models.CharField(max_length=50)

    class Meta:
        managed = False
        db_table = 'sys_balance_his'


class SysBank(models.Model):
    prefix_code = models.CharField(max_length=255)
    bank_name = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'sys_bank'


class SysBus(models.Model):
    cancel_flag = models.IntegerField()
    create_user = models.IntegerField()
    create_time = models.DateTimeField()
    update_user = models.IntegerField()
    update_time = models.DateTimeField()
    belongs_abbr = models.CharField(max_length=10)
    municipal_abbr = models.CharField(max_length=10)
    plate_num = models.CharField(max_length=20)
    plate_code = models.CharField(max_length=20)
    bus_model_id = models.IntegerField()
    brand_id = models.IntegerField()
    seat_count = models.IntegerField()
    motorcade_id = models.IntegerField()
    supplier_id = models.IntegerField()
    regist_time = models.DateField()
    buy_time = models.DateTimeField()
    age_type = models.IntegerField()
    top_area_id = models.IntegerField()
    mid_area_id = models.IntegerField()
    area_id = models.IntegerField()
    price_scheme_id = models.IntegerField()
    run_auth = models.CharField(max_length=50)
    available_type = models.CharField(max_length=5)
    auth_status = models.IntegerField()
    vehicle_license1 = models.CharField(max_length=255)
    vehicle_license2 = models.CharField(max_length=255)
    vehicle_license_validity = models.CharField(max_length=20)
    transport_certificate1 = models.CharField(max_length=255)
    transport_certificate2 = models.CharField(max_length=255)
    transport_certificate_validity = models.CharField(max_length=20)
    safety_liability1 = models.CharField(max_length=255)
    safety_liability2 = models.CharField(max_length=255)
    safety_liability_validity = models.CharField(max_length=20)
    supplier_note = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'sys_bus'


class SysBusAuth(models.Model):
    auth_name = models.CharField(unique=True, max_length=50)
    cancel_flag = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'sys_bus_auth'


class SysBusBrand(models.Model):
    cancel_flag = models.IntegerField()
    create_user = models.IntegerField()
    create_time = models.DateTimeField()
    update_user = models.IntegerField()
    update_time = models.DateTimeField()
    brand_name = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'sys_bus_brand'


class SysBusCost(models.Model):
    seat_num = models.IntegerField()
    area_res_id = models.IntegerField()
    brand_id = models.IntegerField()
    base_price = models.DecimalField(max_digits=10, decimal_places=2)
    cancel_flag = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'sys_bus_cost'
        unique_together = (('area_res_id', 'seat_num', 'brand_id'),)


class SysBusImg(models.Model):
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()
    bus_id = models.IntegerField()
    category = models.IntegerField()
    title = models.CharField(max_length=50)
    memo = models.CharField(max_length=255)
    url = models.CharField(max_length=255)
    seq = models.IntegerField()
    status_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'sys_bus_img'


class SysBusModel(models.Model):
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()
    supplier_id = models.IntegerField()
    brand_id = models.IntegerField()
    area_id = models.IntegerField()
    seat_count = models.IntegerField()
    age_type = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'sys_bus_model'
        unique_together = (('supplier_id', 'brand_id', 'area_id', 'seat_count', 'age_type'),)


class SysBusNo1(models.Model):
    disp_txt = models.CharField(unique=True, max_length=4)
    remark = models.TextField(blank=True, null=True)
    area_id = models.IntegerField()
    cancel_flag = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'sys_bus_no1'


class SysBusNo2(models.Model):
    disp_txt = models.CharField(max_length=4)
    remark = models.TextField(blank=True, null=True)
    cancel_flag = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'sys_bus_no2'


class SysBusSeat(models.Model):
    name = models.CharField(max_length=10)
    seat_num = models.IntegerField(unique=True)
    cancel_flag = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'sys_bus_seat'


class SysBusnoArea(models.Model):
    bus_no1 = models.CharField(max_length=4)
    bus_no2 = models.CharField(max_length=4)
    area_name = models.CharField(max_length=512)
    area_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'sys_busno_area'
        unique_together = (('bus_no1', 'bus_no2'),)


class SysCategory(models.Model):
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()
    pid = models.IntegerField()
    name = models.CharField(max_length=255)
    note = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'sys_category'


class SysCodeDesc(models.Model):
    code = models.IntegerField()
    desc = models.CharField(max_length=255)
    note = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'sys_code_desc'


class SysCommentSetting(models.Model):
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()
    type = models.IntegerField()
    name = models.CharField(max_length=255)
    scores = models.BigIntegerField()
    status_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'sys_comment_setting'


class SysDriver(models.Model):
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()
    driver_number = models.CharField(max_length=50)
    driver_name = models.CharField(max_length=100)
    supplier_id = models.IntegerField()
    fleet_id = models.IntegerField()
    sex = models.IntegerField()
    age = models.IntegerField()
    birthday = models.CharField(max_length=20)
    tel = models.CharField(max_length=50)
    driver_address = models.CharField(max_length=255)
    identity_card = models.CharField(max_length=50)
    license_num = models.CharField(max_length=50)
    first_licence_date = models.CharField(max_length=50)
    auth_status = models.IntegerField()
    id_file1 = models.CharField(max_length=255)
    id_file2 = models.CharField(max_length=255)
    id_file_validity = models.CharField(max_length=20)
    drive_license_file1 = models.CharField(max_length=255)
    drive_license_file2 = models.CharField(max_length=255)
    driver_license_validity = models.CharField(max_length=20)
    qualification_certificate_file = models.CharField(max_length=255)
    qualification_certificate_validity = models.CharField(max_length=20)
    driver_photo = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'sys_driver'


class SysFleet(models.Model):
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()
    fleet_name = models.CharField(max_length=255)
    manage_type = models.IntegerField()
    company_name = models.CharField(max_length=100)
    auth_status = models.IntegerField()
    contact_name = models.CharField(max_length=20)
    contact_mobile = models.CharField(max_length=20)
    contact_address = models.CharField(max_length=255)
    top_area_id = models.IntegerField()
    mid_area_id = models.IntegerField()
    area_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'sys_fleet'


class SysSampleLine(models.Model):
    area_id = models.IntegerField()
    line_name = models.CharField(max_length=128)
    days_num = models.IntegerField()
    miles = models.IntegerField()
    cancel_flag = models.IntegerField()
    disp_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'sys_sample_line'


class SysSetting(models.Model):
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()
    category = models.ForeignKey(SysCategory, models.DO_NOTHING)
    seq = models.IntegerField()
    name = models.CharField(max_length=255)
    value = models.CharField(max_length=255)
    link = models.CharField(max_length=255)
    note = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'sys_setting'


class TableBase(models.Model):
    cancel_flag = models.IntegerField()
    create_time = models.DateTimeField()
    create_user = models.IntegerField()
    update_time = models.DateTimeField()
    update_user = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'table_base'
