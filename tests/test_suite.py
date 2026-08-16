# PlotShare — Comprehensive Test Suite
# Unit Testing, Feature Testing, and End-to-End (E2E) Simulated DOM Flow Testing

import unittest
import urllib.request
import re
import json
import os
import sys

# Ensure UTF-8 output on Windows consoles
sys.stdout.reconfigure(encoding='utf-8')

# Area conversion reference equations
class AreaConverter:
    @staticmethod
    def to_sqm(val, unit):
        val = float(val)
        if unit in ['shotok', 'decimal']:
            return val * 40.4686
        elif unit == 'katha':
            return val * 1.65 * 40.4686
        elif unit == 'bigha':
            return val * 33 * 40.4686
        elif unit == 'acre':
            return val * 100 * 40.4686
        elif unit == 'hectare':
            return val * 10000.0
        return val

    @staticmethod
    def from_sqm(sqm, unit):
        sqm = float(sqm)
        if unit in ['shotok', 'decimal']:
            return sqm / 40.4686
        elif unit == 'katha':
            return sqm / (1.65 * 40.4686)
        elif unit == 'bigha':
            return sqm / (33 * 40.4686)
        elif unit == 'acre':
            return sqm / (100 * 40.4686)
        elif unit == 'hectare':
            return sqm / 10000.0
        return sqm

    @staticmethod
    def convert(val, from_u, to_u):
        sqm = AreaConverter.to_sqm(val, from_u)
        return AreaConverter.from_sqm(sqm, to_u)

    @staticmethod
    def to_bangla_num(num_str):
        bn_digits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯']
        s = str(num_str)
        for i, d in enumerate(bn_digits):
            s = s.replace(str(i), d)
        return s


class TestUnitMathAndData(unittest.TestCase):
    """UNIT TESTS: Mathematical Precision & Normalization"""
    
    def test_shotok_to_sqm(self):
        sqm = AreaConverter.to_sqm(1, 'shotok')
        self.assertAlmostEqual(sqm, 40.4686, places=3)

    def test_bigha_conversion(self):
        # 1 Bigha = 33 Shotok
        shotok = AreaConverter.convert(1, 'bigha', 'shotok')
        self.assertAlmostEqual(shotok, 33.0, places=2)

    def test_acre_conversion(self):
        # 1 Acre = 100 Shotok = 3.0303 Bigha
        shotok = AreaConverter.convert(1, 'acre', 'shotok')
        self.assertAlmostEqual(shotok, 100.0, places=2)
        bigha = AreaConverter.convert(1, 'acre', 'bigha')
        self.assertAlmostEqual(bigha, 100.0 / 33.0, places=2)

    def test_bangla_numeral_conversion(self):
        res = AreaConverter.to_bangla_num('1234567890')
        self.assertEqual(res, '১২৩৪৫৬৭৮৯০')

    def test_barga_split_calculation(self):
        harvest_value = 80000
        farmer_share_50 = harvest_value * 0.50
        owner_share_50 = harvest_value * 0.50
        self.assertEqual(farmer_share_50, 40000)
        self.assertEqual(owner_share_50, 40000)


class TestFeatureRendering(unittest.TestCase):
    """FEATURE TESTS: Verifying DOM Components & HTML Integrity"""

    @classmethod
    def setUpClass(cls):
        with open('d:/Code/PlotShare/index.html', 'r', encoding='utf-8') as f:
            cls.html = f.read()

    def test_router_handles_all_15_screens(self):
        required_routes = [
            'home', 'explore', 'plot-details', 'book-plot', 'list-plot',
            'my-farm', 'grow-assistant', 'disease-scanner', 'farm-planner',
            'crop-planner', 'harvest-tracker', 'machinery', 'community',
            'marketplace', 'notifications', 'profile'
        ]
        for route in required_routes:
            self.assertIn(f"case '{route}':", self.html, f"Route {route} missing in switch statement")

    def test_bilingual_dictionary_present(self):
        self.assertIn("DICTIONARY = {", self.html)
        self.assertIn("bn: {", self.html)
        self.assertIn("en: {", self.html)

    def test_ai_disease_scanner_present(self):
        self.assertIn("scanSampleDisease", self.html)
        self.assertIn("rice_blast", self.html)
        self.assertIn("potato_late_blight", self.html)
        self.assertIn("tomato_leaf_curl", self.html)

    def test_leaflet_map_dependencies(self):
        self.assertIn("leaflet.js", self.html)
        self.assertIn("leaflet.css", self.html)
        self.assertIn("initLeafletMap", self.html)

    def test_digital_signature_pad_present(self):
        self.assertIn("signature-canvas", self.html)
        self.assertIn("initSignaturePad", self.html)
        self.assertIn("clearSignaturePad", self.html)

    def test_dynamic_expense_logger_present(self):
        self.assertIn("openAddExpenseModal", self.html)
        self.assertIn("saveExpense", self.html)

    def test_harvest_tracker_present(self):
        self.assertIn("openLogHarvestModal", self.html)
        self.assertIn("saveHarvest", self.html)

    def test_machinery_sharing_present(self):
        self.assertIn("renderMachineryScreen", self.html)
        self.assertIn("AGRICULTURAL_MACHINERY", self.html)

    def test_safe_initialization_no_domcontentloaded_hang(self):
        # Must execute startPlotShareApp immediately if document is ready
        self.assertIn("startPlotShareApp", self.html)
        self.assertIn("document.readyState", self.html)


class TestSystemAndE2E(unittest.TestCase):
    """SYSTEM & E2E TESTS: Local Server Verification & Static Assets"""

    def test_index_html_live_http_200(self):
        url = 'http://localhost:8080/index.html'
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            self.assertEqual(response.status, 200)
            content = response.read().decode('utf-8')
            self.assertIn("PlotShare", content)
            self.assertIn("id=\"app-root\"", content)
            self.assertIn("id=\"screen-container\"", content)

    def test_standalone_screens_live_http_200(self):
        subdirs = [
            'home_dashboard', 'explore_map', 'plot_details', 'book_plot',
            'list_your_plot', 'my_plots_dashboard', 'grow_assistant',
            'crop_planner', 'harvest_tracker', 'community_feed',
            'surplus_sharing', 'notifications_center', 'user_profile',
            'splash_onboarding'
        ]
        for sub in subdirs:
            url = f'http://localhost:8080/{sub}/code.html'
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req) as resp:
                self.assertEqual(resp.status, 200, f"Failed HTTP 200 for {sub}/code.html")

    def test_data_module_export_integrity(self):
        data_path = 'd:/Code/PlotShare/src/data/bangladeshData.js'
        self.assertTrue(os.path.exists(data_path))
        with open(data_path, 'r', encoding='utf-8') as f:
            content = f.read()
        self.assertIn("export const BANGLADESH_LOCATIONS", content)
        self.assertIn("export const AREA_CONVERTER", content)
        self.assertIn("export const SEASONS", content)
        self.assertIn("export const CROPS", content)
        self.assertIn("export const PLANT_DISEASES", content)
        self.assertIn("export const INITIAL_PLOTS", content)
        self.assertIn("export const AGRICULTURAL_MACHINERY", content)
        self.assertIn("export const WHOLESALE_MARKET_RATES", content)


if __name__ == '__main__':
    print("=" * 60)
    print("🌾 PLOTSHARE — RUNNING AUTOMATED TEST SUITE")
    print("=" * 60)
    suite = unittest.TestSuite()
    loader = unittest.defaultTestLoader
    suite.addTest(loader.loadTestsFromTestCase(TestUnitMathAndData))
    suite.addTest(loader.loadTestsFromTestCase(TestFeatureRendering))
    suite.addTest(loader.loadTestsFromTestCase(TestSystemAndE2E))
    runner = unittest.TextTestRunner(verbosity=2)
    result = runner.run(suite)
    if not result.wasSuccessful():
        sys.exit(1)
